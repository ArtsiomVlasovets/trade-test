import { AbstractControl, ValidatorFn } from '@angular/forms';

export class PriceValidator {

  static validPrice = (): ValidatorFn => {
    return (priceControl: AbstractControl): { [key: string]: boolean } | null => {
        console.log('priceControl', priceControl);
      if (priceControl.value < 0) {
        return {validPrice: true}
      } else {
        return null;
      }
    };
  }
}