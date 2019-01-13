import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  ShouldHaveSameEmail,
  ShouldHaveSamePassword,
  CrossFieldErrorMatcher
} from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [ AngularFireAuth ]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  emailErrorMatcher = new CrossFieldErrorMatcher('emailNotMatch');
  passwordErrorMatcher = new CrossFieldErrorMatcher('passwordNotMatch');

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      confirmEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      userName: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ])
    }, { validators: [ ShouldHaveSameEmail, ShouldHaveSamePassword ] });
  }

  getCEmailErrorMessage(): string {
    const email = this.signUpForm.controls.confirmEmail;
    return email.hasError('required') ? 'Please enter email' :
      email.hasError('email') ? 'Invalid email' : this.signUpForm.errors.emailNotMatch ?
        'Both emails should match' : '';
  }

  getCPassErrorMessage(): string {
    const password = this.signUpForm.controls.confirmPassword;
    return password.hasError('required') ? 'Please enter password' :
      this.signUpForm.errors.passwordNotMatch ? 'Both passwords should match' : '';
  }

  onSubmit(): void {
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.signUpForm.value['email'],
      this.signUpForm.value['password']
    ).then(success => {
        this.router.navigate(['/global/home']);
    }).catch(error => {
        console.log(error);
    });
  }

}
