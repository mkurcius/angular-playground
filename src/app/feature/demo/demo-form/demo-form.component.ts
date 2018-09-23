import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
import { Model } from '../model';
import { ModelForm } from './model-form';

@Component({
  selector: 'mct-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoFormComponent implements OnInit, OnChanges {
  @Input()
  model: Model | null = null;
  @Output()
  onSave = new EventEmitter<ModelForm>();

  form: FormGroup;

  ngOnInit() {
    // ngOnChanges runs before ngOnInit, so form can already be built
    if (!this.form) {
      this.buildForm();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildForm();
  }

  handleSubmit() {
    this.onSave.emit(this.form.value);
  }

  private buildForm() {
    const config: FormUtils.Config<ModelForm> = {
      group: new FormGroup({}),
      array: new FormArray([]),
    };

    this.form = new FormGroup(config);
  }
}
