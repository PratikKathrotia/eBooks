import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../../libs/sys-utils/services/user.service';
import { User } from '../../libs/sys-utils/interfaces/user.interface';
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
  user: User = {
    uid: '',
    firstName: '',
    lastName: '',
    email: ''
  };
  errorMessage: string;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService) { }

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
        this.userService.getUsers().subscribe(users => {
          this.user.uid = this.afAuth.auth.currentUser.uid;
        });
        this.user.firstName = this.signUpForm.value.firstName,
        this.user.lastName = this.signUpForm.value.lastName,
        this.user.email = this.signUpForm.value.email;
        this.userService.addUser(this.user);
        this.router.navigate(['/global/home']);
    }).catch(error => {
        this.errorMessage = error;
    });
  }

}
