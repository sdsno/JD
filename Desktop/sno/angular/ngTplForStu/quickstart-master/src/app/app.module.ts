import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Demo01Component } from './/demo01/demo01.component';
import { Demo02Component } from './demo02_lianxi/demo02.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02Component
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
