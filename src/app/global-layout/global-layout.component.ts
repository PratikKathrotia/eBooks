import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarRailService } from '@angular-eBooks/sys-utils';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'eb-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss']
})
export class GlobalLayoutComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  showRail;

  constructor(private railService: SidebarRailService, private router: Router) {
    this.subscribe = this.railService.openSiderail$.subscribe(bool => {
      this.showRail = bool;
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
