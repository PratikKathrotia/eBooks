import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  loggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = (localStorage.getItem('current_User')) ? true : false;
  }

  openAuthPage(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('current_User');
    this.router.navigate(['sign-in']);
  }

}
