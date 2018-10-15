import { FormControl, FormGroup } from '@angular/forms';

export class FormGroupId extends FormControl {
  constructor(value: any) {
    super(value, null, null);
  }

  get dirty(): boolean {
    const controls = (this.parent as FormGroup).controls;
    return Object.keys(controls)
      .filter(name => controls[name] !== this)
      .some(name => controls[name].dirty);
  }

  set dirty(value: boolean) {}

  get pristine(): boolean {
    return !this.dirty;
  }

  set pristine(value: boolean) {}

  setValue(value: any, options?: Object): void { }

  patchValue(value: any, options?: Object): void { }

  reset(value?: any, options?: Object): void { }
}
