import {FormControl} from '@angular/forms';

export class MyValidators {
  static idPattern(control: FormControl): {[key: string]: boolean} | null {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/[^A-z\d]/)) {
      return {idPattern: true};
    }
    return null;
  }
}
