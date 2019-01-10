import {
  FormGroupDirective,
  FormControl
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class CrossFieldErrorMatcher implements ErrorStateMatcher {
  constructor(private errorStr: string) {}
  isErrorState(control: FormControl | null, form: FormGroupDirective): boolean {
    return (control.dirty || control.touched) && form.hasError(this.errorStr);
  }
}
