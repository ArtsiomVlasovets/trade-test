import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidator {
  static validPrice = (): ValidatorFn => {
    return (
      priceControl: AbstractControl
    ): { [key: string]: boolean } | null => {
      if (priceControl.value < 0) {
        return { validPrice: true };
      } else {
        return null;
      }
    };
  };

  static validExitDate = (exitDateControl: AbstractControl): ValidatorFn => {
    return (
      entryDateControl: AbstractControl
    ): { [key: string]: boolean } | null => {
      if (entryDateControl.value < exitDateControl.value) {
        return { validExitDate: true };
      } else {
        return null;
      }
    };
  };
}
