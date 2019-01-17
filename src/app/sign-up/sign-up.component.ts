import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ShouldHaveSameEmail,
  ShouldHaveSamePassword,
  CrossFieldErrorMatcher
} from '@angular-eBooks/sys-utils';
import { AuthService, UserService, IUser } from '@angular-eBooks/sys-utils';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [ AuthService ]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  emailErrorMatcher = new CrossFieldErrorMatcher('emailNotMatch');
  passwordErrorMatcher = new CrossFieldErrorMatcher('passwordNotMatch');
  errorMsg: string;
  hide: boolean = true;
  hideConPass: boolean = true;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

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
        Validators.pattern('^(?=.*\d).{6,10}$')
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ])
    }, { validators: [ ShouldHaveSameEmail, ShouldHaveSamePassword ] });
  }

  getFnErrorMsg(): string {
    const fn = this.signUpForm.controls.firstName;
    return fn.hasError('required') ? 'Please enter firstname' : '';
  }

  getLnErrorMsg(): string {
    const ln = this.signUpForm.controls.lastName;
    return ln.hasError('required') ? 'Please enter lastname' : '';
  }

  getEmailErrorMsg(): string {
    const email = this.signUpForm.controls.email;
    return email.hasError('required') ? 'Please enter firstname' :
      email.hasError('email') ? 'Please enter valid email' : '';
  }

  getCEmailErrorMessage(): string {
    const email = this.signUpForm.controls.confirmEmail;
    return email.hasError('required') ? 'Please enter email' :
      email.hasError('email') ? 'Invalid email' : this.signUpForm.errors.emailNotMatch ?
        'Both emails should match' : '';
  }

  getUserErrorMsg(): string {
    const userName = this.signUpForm.controls.userName;
    return userName.hasError('required') ? 'Please enter username' : '';
  }

  getPasswordErrorMsg(): string {
    const password = this.signUpForm.controls.password;
    return password.hasError('required') ? 'Please enter password' :
      password.hasError('pattern') ?
        'Password must be between 6 and 10 digits long.' : '';
  }

  getCPassErrorMessage(): string {
    const password = this.signUpForm.controls.confirmPassword;
    return password.hasError('required') ? 'Please enter password' :
      this.signUpForm.errors.passwordNotMatch ? 'Both passwords should match' : '';
  }

  onSubmit(): void {
    this.authService.newUser(
      this.signUpForm.value['email'],
      this.signUpForm.value['password']
    ).then((success: any) => {
      const tempUser: IUser = {
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        email: this.signUpForm.value.email,
        uid: this.afAuth.auth.currentUser.uid,
        favorites: []
      };
      this.userService.addUser(tempUser);
      localStorage.setItem('current_User', this.afAuth.auth.currentUser.uid);
      this.router.navigate(['/global/home']);
    }).catch((error: string) => {
      this.errorMsg = error;
    });
  }

}
