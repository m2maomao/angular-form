import { Directive } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');
  return name && alterEgo && name.value === alterEgo.value ? { identityRevealed: true } : null;
};
@Directive({
  selector: '[appIdentityRevealed]',
  providers: [{provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true}]
})
export class IdentityRevealedValidatorDirective implements Validator{
  validate(control: AbstractControl): ValidationErrors {
    return identityRevealedValidator(control);
  }
}
