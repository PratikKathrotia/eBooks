import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@angular-eBooks/sys-utils';
import { Location } from '@angular/common';

@Component({
  selector: 'eb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location) { }

  ngOnInit() {
  }

  get isLogin(): boolean {
    return (localStorage.getItem('current_User')) ? true : false;
  }

  openAuthPage(route: string) {
    this.router.navigate([route]);
  }

  navToMainPage() {
    this.router.navigate(['global/home']);
  }
  logout() {
    this.authService.logout();
    localStorage.removeItem('current_User');
    this.router.navigateByUrl('/global/popular', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/global/home']);
    });
  }

}
