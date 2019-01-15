import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ UserService ]
})
export class HomeComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
