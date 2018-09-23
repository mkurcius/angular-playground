import { AbstractControl, FormGroup } from '@angular/forms';

export namespace FormUtils {
  export type Config<T> = {
    [key in keyof T]: AbstractControl
  };

  export function setControl<T>(name: Extract<keyof T, string>, control: AbstractControl, form: FormGroup) {
    form.setControl(name, control);
  }
}
