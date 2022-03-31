import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from '../color.component';
import { ColorRoutingModule } from '../color-routing.module';



@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ColorComponent,
    ColorRoutingModule
  ]
})
export class ColorModule { }
