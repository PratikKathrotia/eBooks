import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'eb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

}
