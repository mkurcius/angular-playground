import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PristineDirective } from './pristine.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PristineDirective],
  exports: [PristineDirective]
})
export class PristineModule { }
