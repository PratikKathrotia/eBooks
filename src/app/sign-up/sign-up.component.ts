import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShouldHaveSameEmail, ShouldHaveSamePassword } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() { }

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
    }, { validators: ShouldHaveSameEmail });
  }

  getErrorMessage() {
    const email = this.signUpForm.controls.confirmEmail;
    return email.hasError('required') ? 'Please enter email' :
      email.hasError('email') ? 'Invalid email' : this.signUpForm.errors.emailNotMatch ?
        'Both emails should match' : '';
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    console.log(this.signUpForm);
  }

}
