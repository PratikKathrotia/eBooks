import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UtilService {

  private showLoadingIndicator = new BehaviorSubject<boolean> (false);
  public showLoadingIndicator$ = this.showLoadingIndicator.asObservable();
  private toggleView = new BehaviorSubject<boolean> (false);
  public toggleViewIndicator = this.toggleView.asObservable();
  private customerReview = new BehaviorSubject<boolean> (false);
  public toggleCustomerReview = this.customerReview.asObservable();

  constructor(private snackBar: MatSnackBar) { }

  sendLoadingIndicator(bool: boolean) {
    this.showLoadingIndicator.next(bool);
  }

  sendToggleViewValue(bool: boolean) {
    this.toggleView.next(bool);
  }

  showSnackBar(message: string, action?: string) {
    this.snackBar.open(
      message,
      action ? action : null,
      {
        duration: 7000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }

  showCustomerReview(bool: boolean) {
    this.customerReview.next(bool);
  }
}
