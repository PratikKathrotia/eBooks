import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarRailService } from '@angular-eBooks/sys-utils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'eb-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss']
})
export class GlobalLayoutComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  showRail;
  loggedIn;
  signUp;

  constructor(private railService: SidebarRailService) {
    this.subscribe = this.railService.openSiderail$.subscribe(bool => {
      this.showRail = bool;
    });
  }

  ngOnInit() {
    this.loggedIn = false;
    this.signUp = false;
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  getSignInVal(event) {
    this.loggedIn = event;
  }

  getToolbarVal(event) {
    this.signUp = event;
  }

  getHomePage(event) {
    this.loggedIn = false;
  }
}
