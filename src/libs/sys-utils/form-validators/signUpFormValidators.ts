import {
  ValidatorFn,
  FormGroup,
  ValidationErrors
} from '@angular/forms';

export const ShouldHaveSameEmail: ValidatorFn = (control: FormGroup): ValidationErrors => {
  const email = control.get('email').value;
  const confirmEmail = control.get('confirmEmail').value;
  return (email && confirmEmail && (email === confirmEmail)) ? null : { 'emailNotMatch': true };
};

export const ShouldHaveSamePassword: ValidatorFn = (control: FormGroup): ValidationErrors => {
  const password = control.get('password').value;
  const confirmPassword = control.get('confirmPassword').value;
  return (password && confirmPassword && (password === confirmPassword))
          ? null : { 'passwordNotMatch': true };
};
