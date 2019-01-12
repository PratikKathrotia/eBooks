import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;
  redirectUrl: string;

  constructor() { }

  login(user) {
    if (user.userName === 'pratik1994') {
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
