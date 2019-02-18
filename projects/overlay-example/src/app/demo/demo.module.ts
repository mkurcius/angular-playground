import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTableModule } from '@angular/material';
import { DemoComponent } from './demo.component';
import { MenuTriggerDirective } from './menu-trigger.directive';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule,
  ],
  declarations: [
    DemoComponent,
    MenuTriggerDirective,
  ],
  exports: [DemoComponent],
})
export class DemoModule {}
