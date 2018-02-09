import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RangesModule} from './intervals/intervals.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RangesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
