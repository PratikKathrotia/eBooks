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

  getIndividualUser(userId: string) {
    return this.afStore.doc(`users/${userId}`).get();
  }

  addUser(user: IUser) {
    this.usersCollection.add(user);
  }
}
