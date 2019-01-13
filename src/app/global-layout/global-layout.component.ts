import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarRailService } from '@angular-eBooks/sys-utils';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'eb-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss'],
  providers: [ AngularFireAuth ]
})
export class GlobalLayoutComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  showRail;
  demoForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private railService: SidebarRailService,
    private router: Router,
    private afAuth: AngularFireAuth) {
    this.subscribe = this.railService.openSiderail$.subscribe(bool => {
      this.showRail = bool;
    });
  }

  ngOnInit() {
    this.router.navigate(['/global/home']);
    console.log(this.afAuth.auth);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
