import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@angular-eBooks/sys-utils';
import { Location } from '@angular/common';
import { UserService } from '@angular-eBooks/sys-utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'eb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  subject: Subject<any>;
  userId = localStorage.getItem('current_User');
  user;

  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location,
    private userService: UserService) { }

  ngOnInit() {
    this.subject = new Subject<any>();
    if (this.userId) {
      this.userService.getIndividualUser(this.userId).pipe(takeUntil(this.subject))
      .subscribe(comingUser => {
        this.user = comingUser.data();
        this.user.firstName = this.user.firstName.charAt(0).toUpperCase()
                              + this.user.firstName.slice(1);
      });
    }
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
