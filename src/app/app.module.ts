import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextModule } from './components/text/module/text.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
