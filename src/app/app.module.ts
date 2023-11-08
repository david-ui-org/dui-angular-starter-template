import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DUIButton } from 'david-ui-angular';
import '@angular/compiler'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DUIButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
