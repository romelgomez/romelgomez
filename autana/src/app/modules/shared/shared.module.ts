import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    CoreModule
  ]
})
export class SharedModule { }
