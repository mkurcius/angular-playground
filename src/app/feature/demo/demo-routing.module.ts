import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCreateFormComponent } from './+create/demo-create-form.component';
import { DemoEditFormComponent } from './+edit/demo-edit-form.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'new',
        component: DemoCreateFormComponent,
      },
      {
        path: 'edit',
        component: DemoEditFormComponent,
      },
      {path: '', redirectTo: 'new', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
