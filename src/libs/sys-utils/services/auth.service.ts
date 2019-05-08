import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  newUser(email: string, password: string): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  login(email: string, password: string): any {
    return this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }

  logout(): void {
    localStorage.removeItem('current_User');
    this.afAuth.auth.signOut();
  }

}
