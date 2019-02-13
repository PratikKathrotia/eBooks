import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UtilService {

  private showLoadingIndicator = new BehaviorSubject<boolean> (false);
  public showLoadingIndicator$ = this.showLoadingIndicator.asObservable();
  private toggleView = new BehaviorSubject<boolean> (false);
  public toggleViewIndicator = this.toggleView.asObservable();

  constructor(
    private snackBar: MatSnackBar,
    private apiService: ApiService,
    private _http: HttpClient
  ) { }

  getSidebarItems() {
    return this._http.get(
      `${this.apiService.getMockServerApiUrl()}/sidebarItems`
    );
  }

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
}
