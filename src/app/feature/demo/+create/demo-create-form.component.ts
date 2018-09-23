import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModelForm } from '../demo-form/model-form';

@Component({
  selector: 'mct-demo-create-form',
  templateUrl: './demo-create-form.component.html',
  styleUrls: ['./demo-create-form.component.scss'],
})
export class DemoCreateFormComponent {
  constructor(public dialog: MatDialog) {}

  @ViewChild(TemplateRef)
  modal: TemplateRef<any>;

  handleSubmit(modelForm: ModelForm) {
    this.dialog.open(this.modal, {
      width: '600px',
      data: modelForm
    });
  }
}
