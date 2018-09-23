import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { DemoFormArrayComponent } from './demo-form-array/demo-form-array.component';
import { DemoFormGroupComponent } from './demo-form-group/demo-form-group.component';
import { DemoFormComponent } from './demo-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  declarations: [
    DemoFormComponent,
    DemoFormGroupComponent,
    DemoFormArrayComponent,
  ],
  exports: [
    DemoFormComponent,
  ],
})
export class DemoFormModule {}
