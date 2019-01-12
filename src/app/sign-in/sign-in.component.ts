import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '@angular-eBooks/sys-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    // this.authService.login(this.signInForm.value);
    this.router.navigate(['/global/home']);
  }

}
