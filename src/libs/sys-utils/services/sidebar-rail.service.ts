import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarRailService {

  private openSiderail = new BehaviorSubject(false);
  public openSiderail$: Observable<any> = this.openSiderail.asObservable();

  constructor() { }

  getSiderailStatus(bool) {
    this.openSiderail.next(bool);
  }
}
