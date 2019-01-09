import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const ShouldHaveSameEmail: ValidatorFn = (control: FormGroup): ValidationErrors => {
  const email = control.get('email');
  const confirmEmail = control.get('confirmEmail');
  return (email && confirmEmail && (email === confirmEmail)) ? null : { 'emailNotMatch': true };
};

export const ShouldHaveSamePassword: ValidatorFn = (control: FormGroup): ValidationErrors => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return (password && confirmPassword && (password === confirmPassword))
          ? null : { 'passwordNotMatch': true };
};
