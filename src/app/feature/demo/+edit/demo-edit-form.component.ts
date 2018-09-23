import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ModelForm } from '../demo-form/model-form';
import { Model } from '../model';

@Component({
  selector: 'mct-demo',
  templateUrl: './demo-edit-form.component.html',
  styleUrls: ['./demo-edit-form.component.scss'],
})
export class DemoEditFormComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  @ViewChild(TemplateRef)
  modal: TemplateRef<any>;

  loading: boolean;
  model$: Observable<Model>;

  ngOnInit() {
    this.loading = true;
    this.model$ = of({
      id: 1,
      group: {
        prop1: 'Value 1',
        prop2: 123,
      },
      array: [
        {
          prop3: 'Value 3.1',
          prop4: 1,
        },
        {
          prop3: 'Value 3.2',
          prop4: 2,
        },
        {
          prop3: 'Value 3.3',
          prop4: 3,
        },
      ],
    }).pipe(
      delay(1000),
      tap(() => this.loading = false),
    );
  }

  handleSubmit(modelForm: ModelForm) {
    this.dialog.open(this.modal, {
      width: '600px',
      data: modelForm,
    });
  }
}
