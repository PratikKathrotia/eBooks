import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'eb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  @Output() prevPage = new EventEmitter();
  @Output() signUpPage = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  backToPrev() {
    this.prevPage.emit(false);
  }

  openSignUp() {
    this.signUpPage.emit(true);
  }
}
