import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { DeepPartial } from 'ts-essentials/dist';
import { FormUtils } from '../../../utils/form-utils';
import { Model } from '../model';
import { ModelForm } from './model-form';

@Component({
  selector: 'mct-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoFormComponent {
  @Input()
  model: Model | null = null;
  @Output()
  onSave = new EventEmitter<DeepPartial<ModelForm>>();

  constructor() {
    const config: FormUtils.Config<ModelForm> = {
      group: new FormGroup({}),
      array: new FormArray([]),
    };

    this.form = new FormGroup(config);
  }

  form: FormGroup;

  handleSubmit() {
    this.onSave.emit(FormUtils.dirtyValue<ModelForm>(this.form));
  }
}
