import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatToolbarModule } from '@angular/material';
import { DemoCreateFormComponent } from './+create/demo-create-form.component';
import { DemoEditFormComponent } from './+edit/demo-edit-form.component';
import { DemoFormModule } from './demo-form/demo-form.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    DemoFormModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    DemoComponent,
    DemoCreateFormComponent,
    DemoEditFormComponent,
  ],
})
export class DemoModule {}
