import { Component, Input, OnChanges, Optional, Self, SimpleChanges } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup } from '@angular/forms';
import { FormUtils } from '../../../../utils/form-utils';
import { Model } from '../../model';

@Component({
  selector: 'mct-demo-form-array',
  templateUrl: './demo-form-array.component.html',
  styleUrls: ['./demo-form-array.component.scss'],
})
export class DemoFormArrayComponent implements OnChanges {
  @Input()
  array: Model.Group2[];

  constructor(@Optional() @Self() private formArrayNameDirective: FormArrayName) {}

  form: FormArray;

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.formArrayNameDirective.control;

    if (this.array.length > 0) {
      this.array.forEach(group => this.add(group));
    } else {
      this.add();
    }
  }

  add(group: Model.Group2 = {prop3: '', prop4: null}) {
    const config: FormUtils.Config<Model.Group2> = {
      prop3: new FormControl(group.prop3),
      prop4: new FormControl(group.prop4),
    };

    this.form.push(new FormGroup(config));
  }
}
