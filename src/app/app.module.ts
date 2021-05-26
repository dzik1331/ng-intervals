import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgIntervalsModule} from "../../projects/ng-intervals/src/lib/ng-intervals.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgIntervalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
