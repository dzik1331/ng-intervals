import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntervalsComponent} from './intervals.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IntervalsComponent],
  exports: [IntervalsComponent]
})
export class IntervalsModule {
}
