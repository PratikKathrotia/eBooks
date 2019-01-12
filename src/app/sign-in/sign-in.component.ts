import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'eb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  checked = true;

  @Output() prevPage = new EventEmitter();
  @Output() signUpPage = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      userName: new FormControl(localStorage.getItem('userName')),
      password: new FormControl(localStorage.getItem('password')),
      checked: new FormControl('')
    });
  }

  onSignInSubmit(): void {
    if (this.signInForm.value.checked) {
      localStorage.setItem('userName', this.signInForm.value.userName);
      localStorage.setItem('password', this.signInForm.value.password);
    }
  }

  backToPrev() {
    this.prevPage.emit(false);
  }

  openSignUp() {
    this.signUpPage.emit(true);
  }
}
