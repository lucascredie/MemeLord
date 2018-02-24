
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';
import { Meme } from '../models/Meme';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase';
import { async } from '@angular/core/testing';
import * as _ from 'lodash';
import { UserService } from './user.service';


@Injectable()
export class MemeService {
  uploadModel: Meme;
  memeCol: AngularFirestoreCollection<Meme>;
  images: Observable<Meme[]>;
  success: Promise<boolean>;
  recentUploadURL: string;

  constructor(private fireStorage: AngularFireStorage, private afs: AngularFirestore, private userve: UserService) {
    this.success = null;
    this.recentUploadURL = '';

  }

  NgOnInit() {
    this.memeCol = this.afs.collection('memes');
  }

   upload(path, file, id){
    // Upload image to storage
    const uploadfile = file;
    const uploadPath = path;
    let _url = '';
    const task = this.fireStorage.upload(path, file);
    task.downloadURL().subscribe(url => {
      let temp = {
        name: file,
        url: url
      }
      this.addMeme(temp);
      this.userve.getUserDoc(id).subscribe(user => {
        user.memes.push(temp);
        this.userve.updateUser(user);
      });
    });
  }

  addMeme(newMeme: Meme) {
    this.memeCol.add(newMeme);
  }

  getMemeByURL(url) {
    let fetchedRef = this.afs
    .collection('users', ref => ref.where('url', '==', url));

    let toReturn = fetchedRef.snapshotChanges().map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as Meme;
        const $id = action.payload.doc.id;
        return {$id, ...data};
      });
    });
    return toReturn;
  }


}
