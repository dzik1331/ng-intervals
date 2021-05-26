import { NgModule } from '@angular/core';
import { NgIntervalsComponent } from './ng-intervals.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    NgIntervalsComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NgIntervalsComponent
  ]
})
export class NgIntervalsModule { }
