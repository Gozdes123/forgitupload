import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tes01Component } from './tes01/tes01.component';
import { Tes02Component } from './tes02/tes02.component';

@NgModule({
  declarations: [
    AppComponent,
    Tes01Component,
    Tes02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
