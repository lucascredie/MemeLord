
import { Injectable } from '@angular/core';
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
  imageCollection: AngularFirestoreCollection<Meme>;
  images: Observable<Meme[]>;
  success: Promise<boolean>;
  recentUploadURL: string;

  constructor(private fireStorage: AngularFireStorage, private afs: AngularFirestore) {
    this.imageCollection = this.afs.collection('images');
    this.success = null;
    this.recentUploadURL = '';

  }

   upload(path, file): Observable<string> {
    // Upload image to storage
    const uploadfile = file;
    const uploadPath = path;
    let _url = '';
    const task = this.fireStorage.upload(path, file);
    return task.downloadURL();
  }
}
