import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UtilService {

  private showLoadingIndicator = new BehaviorSubject<boolean> (false);
  public showLoadingIndicator$ = this.showLoadingIndicator.asObservable();

  constructor(private snackBar: MatSnackBar) { }

  sendLoadingIndicator(bool: boolean) {
    this.showLoadingIndicator.next(bool);
  }

  showSnackBar(message: string, action?: string) {
    this.snackBar.open(
      message,
      action ? action : null,
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }
}
