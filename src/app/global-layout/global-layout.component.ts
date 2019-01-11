import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarRailService } from '@angular-eBooks/sys-utils';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'eb-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss']
})
export class GlobalLayoutComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  showRail;
  demoForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private railService: SidebarRailService) {
    this.subscribe = this.railService.openSiderail$.subscribe(bool => {
      this.showRail = bool;
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
