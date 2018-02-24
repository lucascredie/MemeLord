import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/User';
import { Profile } from '../models/Profile';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
userCol: AngularFirestoreCollection<User>;
users: Observable<User[]>;
user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.userCol = this.afs.collection('users');
   }

  getUsers (): Observable<User[]> {
    let users = this.userCol.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as User;
        const id = action.payload.doc.id;
        return {id, ...data};
      });
    })
    return users;
  }

  getUser(uname): Observable<User[]> {
    let fetchedRef = this.afs
        .collection('users', ref => ref.where('uname', '==', uname));

        let toReturn = fetchedRef.snapshotChanges().map( changes => {
          return changes.map( action => {
            const data = action.payload.doc.data() as User;
            const $id = action.payload.doc.id;
            return {$id, ...data};
          });
        });
        return toReturn;
  }

  getUserDoc(id: string): Observable<User>{
    let fetched = this.userCol.doc(id).snapshotChanges()
    .map( change => {
      const data = change.payload.data() as User;
      const $id = change.payload.id;
      return {$id, ...data};
    });
      return fetched;
  }

  addUser(newUser: User) {
     this.userCol.add(newUser);
    //  .then( docref => {
    //     return docref;
    //  })
    //  .catch(error => {
    //    console.log('Error during add user: ', error);
    //  });
    //  return p;

  }

  updateUser(user) {
    this.userCol.doc(user.$id).set({
      memes: user.memes
    })
  }


}
