import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { DeepPartial } from 'ts-essentials/dist';

export namespace FormUtils {
  export type Config<T> = {
    [key in keyof T]: AbstractControl
  };

  export function setControls<T>(config: Config<T>, form: FormGroup) {
    Object.keys(config)
      .forEach(name => form.setControl(name, config[name]));
  }

  export function dirtyValue<T>(control: FormGroup): DeepPartial<T>;
  export function dirtyValue<T>(control: FormArray): DeepPartial<T>[];
  export function dirtyValue<T>(control: FormControl): T | undefined;
  export function dirtyValue<T>(control: AbstractControl): DeepPartial<T> | DeepPartial<T>[] | T | undefined;
  export function dirtyValue<T>(control: AbstractControl): DeepPartial<T> | DeepPartial<T>[] | T | undefined {
    if (control instanceof FormGroup) {
      const value = {};
      Object.keys(control.controls)
        .filter(name => control.controls[name].dirty)
        .forEach(name => {
          value[name] = dirtyValue(control.controls[name]);
        });

      return value;
    } else if (control instanceof FormArray) {
      const value = [];
      control.controls
        .filter(control => control.dirty)
        .forEach(control => {
          value.push(dirtyValue(control));
        });

      return value;
    } else {
      return control.dirty ? control.value : undefined;
    }
  }
}
