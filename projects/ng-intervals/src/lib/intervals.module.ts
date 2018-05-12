import { NgModule } from '@angular/core';
import { IntervalsComponent } from './intervals.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [IntervalsComponent],
  exports: [IntervalsComponent]
})
export class IntervalsModule { }
