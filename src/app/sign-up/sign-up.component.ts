import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      confirmEmail: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

}
