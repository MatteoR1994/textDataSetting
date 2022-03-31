import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from '../color.component';



@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ColorComponent
  ]
})
export class ColorModule { }
