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

  onSignInSubmit(): void {
    this.authService.login(
      this.signInForm.value['email'],
      this.signInForm.value['password']
    ).then((success: any) => {
      localStorage.setItem('current_User', this.afAuth.auth.currentUser.uid);
      this.router.navigate(['/global/home']);
    }).catch((error: any) => console.log(error));
  }

}
