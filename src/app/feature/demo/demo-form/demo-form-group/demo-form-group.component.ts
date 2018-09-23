import { Component, Input, OnChanges, Optional, Self, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { FormUtils } from '../../../../utils/form-utils';
import { Model } from '../../model';

@Component({
  selector: 'mct-demo-form-group',
  templateUrl: './demo-form-group.component.html',
  styleUrls: ['./demo-form-group.component.scss'],
})
export class DemoFormGroupComponent implements OnChanges {
  @Input()
  group: Model.Group1 | null = null;

  constructor(@Optional() @Self() private formGroupName: FormGroupName) { }

  form: FormGroup;

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.formGroupName.control;

    FormUtils.setControl<Model.Group1>('prop1', new FormControl(this.group ? this.group.prop1 : ''), this.form);
    FormUtils.setControl<Model.Group1>('prop2', new FormControl(this.group ? this.group.prop2 : null), this.form);
  }
}
