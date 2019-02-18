import { Component, Input, OnChanges, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup } from '@angular/forms';
import { FormGroupId } from '../../../../utils/form-group-id';
import { FormUtils } from '../../../../utils/form-utils';
import { Model } from '../../model';

@Component({
  selector: 'mct-demo-form-array',
  templateUrl: './demo-form-array.component.html',
  styleUrls: ['./demo-form-array.component.scss'],
})
export class DemoFormArrayComponent implements OnInit, OnChanges {
  @Input()
  array: Model.Group2[];

  constructor(@Optional() @Self() private formArrayNameDirective: FormArrayName) {}

  form: FormArray;

  ngOnInit(): void {
    this.form = this.formArrayNameDirective.control;
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form) {
      this.refresh();
    }
  }

  add(group?: Model.Group2) {
    const config: FormUtils.Config<Model.Group2> = {
      id: new FormGroupId(group ? group.id : null),
      prop3: new FormControl(group ? group.prop3 : null),
      prop4: new FormControl(group ? group.prop4 : null),
    };

    this.form.push(new FormGroup(config));
  }

  private refresh() {
    while (this.form.length) {
      this.form.removeAt(0);
    }

    if (this.array.length > 0) {
      this.array.forEach(group => this.add(group));
    } else {
      this.add();
    }
  }
}
