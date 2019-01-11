import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'eb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() signUpVal = new EventEmitter();
  @Output() signInVal = new EventEmitter();

  loggedIn;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedIn = false;
  }

  openSignIn() {
    // this.signInVal.emit(true);
    this.router.navigate([{ outlets: { authOutlet: 'sign-in', globalOutlet: null } }]);
  }

  openSignUp() {
    // this.signUpVal.emit(true);
    this.router.navigate([{ outlets: { authOutlet: 'sign-up', globalOutlet: null } }]);
  }

}
