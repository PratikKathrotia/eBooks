import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userExist =  false;
  redirectUrl: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  isLoggedIn() {
    return this.userExist;
  }

  newUser(email: string, password: string): any {
    this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    ).then(success => {
      this.userExist = true;
    }).catch(error => {
      return error;
    });
  }

  login(email: string, password: string): any {
    return this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.userExist = false;
  }

}
