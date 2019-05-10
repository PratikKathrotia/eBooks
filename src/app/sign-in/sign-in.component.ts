import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { AuthService } from '@angular-eBooks/sys-utils';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [ AuthService ]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  checked = true;
  showDelay = new FormControl(1000);
  error_Message;
  isEmailVerified: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl(localStorage.getItem('email')),
      password: new FormControl(localStorage.getItem('password')),
      checked: new FormControl('')
    });
  }

  resetPassword() {
    this.afAuth.auth.sendPasswordResetEmail(this.signInForm.value['email']).
    then(function() {
      alert('Password reset link has been sent to the registered account.');
    }).catch(function(error) {
      alert(error);
    });
  }

  onSignInSubmit(): void {
      if (this.signInForm.value['checked'] === true) {
        localStorage.setItem('email', this.signInForm.value['email']);
        localStorage.setItem('password', this.signInForm.value['password']);
      }
      this.authService.login(
        this.signInForm.value['email'],
        this.signInForm.value['password']
      ).then((success: any) => {
        this.isEmailVerified = this.afAuth.auth.currentUser.emailVerified;
        if (this.isEmailVerified) {
          localStorage.setItem('current_User', this.afAuth.auth.currentUser.uid);
          this.router.navigate(['/global/home']);
        } else {
          this.error_Message = `The email has not been verified.
                                Please verify the email to log in.`;
        }
      }).catch(() => this.error_Message = `Error!: There is no user
      record corresponding to this identifier. Please check the email or password
      and try again.`);
  }

  cancelSignIn() {
    this.authService.logout();
  }
}
