import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UtilService {

  private showLoadingIndicator = new BehaviorSubject<boolean> (false);
  public showLoadingIndicator$ = this.showLoadingIndicator.asObservable();

  constructor() { }

  sendLoadingIndicator(bool: boolean) {
    this.showLoadingIndicator.next(bool);
  }
}
