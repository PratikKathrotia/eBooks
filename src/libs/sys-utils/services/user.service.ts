import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<IUser>;
  userDoc: AngularFirestoreDocument<IUser>;
  users: Observable<IUser[]>;

  constructor(private afStore: AngularFirestore) {
    this.usersCollection = this.afStore.collection(
      'users',
      ref => ref.orderBy('firstName', 'asc')
    );
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as IUser;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getUsers(): Observable<IUser[]> {
    return this.users;
  }

  getIndividualUser(user: IUser): AngularFirestoreDocument<IUser> {
    this.userDoc = this.afStore.doc(`users/${user.id}`);
    return this.userDoc;
  }

  addUser(user: IUser) {
    this.usersCollection.add(user);
  }
}
