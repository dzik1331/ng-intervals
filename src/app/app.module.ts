import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {IntervalsModule} from './intervals/intervals.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntervalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
