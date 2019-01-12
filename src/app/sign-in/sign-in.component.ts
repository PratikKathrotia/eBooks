import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { AuthService } from '@angular-eBooks/sys-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  checked = true;

  constructor(private authService: AuthService, private router: Router) { }

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
    this.router.navigate(['/global/home']);
  }

}
