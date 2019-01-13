import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '@angular-eBooks/sys-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [ AngularFireAuth ]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  checked = true;

  constructor(private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      userName: new FormControl(localStorage.getItem('userName')),
      password: new FormControl(localStorage.getItem('password')),
      checked: new FormControl('')
    });
  }

  onSignInSubmit(): void {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.signInForm.value['userName'],
      this.signInForm.value['password']
    ).then(success => {
      this.router.navigate(['/global/home']);
    }).catch(error => {
      console.log(error);
    });
  }

}
