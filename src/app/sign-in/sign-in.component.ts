import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() prevPage = new EventEmitter();
  @Output() signUpPage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  backToPrev() {
    this.prevPage.emit(false);
  }

  openSignUp() {
    this.signUpPage.emit(true);
  }
}
