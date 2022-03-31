import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorModule } from './components/color/module/color.module';
import { ResultModule } from './components/result/module/result.module';
import { TextModule } from './components/text/module/text.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorModule,
    TextModule,
    ResultModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
