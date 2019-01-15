import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;

  constructor(private afStore: AngularFirestore) {
    this.usersCollection = this.afStore.collection(
      'users',
      ref => ref.orderBy('firstName', 'asc')
    );
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as User;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.usersCollection.add(user);
  }
}
