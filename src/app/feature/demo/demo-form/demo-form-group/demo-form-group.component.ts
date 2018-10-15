import { Component, Input, OnChanges, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { FormUtils } from '../../../../utils/form-utils';
import { Model } from '../../model';

@Component({
  selector: 'mct-demo-form-group',
  templateUrl: './demo-form-group.component.html',
  styleUrls: ['./demo-form-group.component.scss'],
})
export class DemoFormGroupComponent implements OnInit, OnChanges {
  @Input()
  group: Model.Group1 | null = null;

  constructor(@Optional() @Self() private formGroupName: FormGroupName) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formGroupName.control;

    FormUtils.setControls<Model.Group1>({
      prop1: new FormControl(),
      prop2: new FormControl()
    }, this.form);

    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form) {
      this.refresh();
    }
  }

  private refresh() {
    const value: Model.Group1 = {
      prop1: this.group ? this.group.prop1 : null,
      prop2: this.group ? this.group.prop2 : null,
    };

    this.form.reset(value, {emitEvent: false});
  }
}
