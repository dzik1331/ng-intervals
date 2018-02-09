# Intervals
Show used intervals on axis

# Install
`npm install ng-intervals`

# Usage

Import `IntervalsModule` into your app's module.

###### Module
```
import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 
 
 import { AppComponent } from './app.component';
 import {RangesModule} from 'ng-ranges';
 
 
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
 ```
 ##### Component
 ```
import {Component} from '@angular/core';
import {Intervals} from './intervals/intervals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  public intervals: Intervals[] = [
    {
      lower: 0,
      lowerClose: true,
      upper: 0.3456,
      upperClose: true
    },
    {
      lower: 0.5,
      lowerClose: true,
      upper: 0.8234567342,
      upperClose: true
    }
  ];
}
```

##### View
```html
<ranges [min]="0" [max]="1" [ranges]="intervals"></ranges>
```
 

