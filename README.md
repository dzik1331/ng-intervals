# Intervals
Show used intervals on axis

# Install
`npm install ng-intervals`

# Usage

Import `IntervalsModule` into your app's module.

###### Module
```typescript
import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 
 
 import { AppComponent } from './app.component';
 import {IntervalsModule} from 'ng-ranges';
 
 
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
 ```
 ##### Component
 ```typescript
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
<intervals [min]="0" [max]="1" [intervals]="intervals"></intervals>
```

# Inputs
* min - Minimal value of interval
* max - Maixmal value of interval
* intervals - Datas of interval, example:
  ```
  {
       lower: 0, //lower value
       lowerClose: true, //is left-closed
       upper: 0.3456, // upper value
       upperClose: true //is right-closed
  }
  ```
* tooltip - Show tooltip with interval value. Default: false
* styleOptions - Object with intervals colors: 
```
  {
    childIntervalColor: 'yellow', // color of added intervals
    mainIntervalColor: 'white' // color of main container
  }
```

```html
<intervals  [tooltip]="true"
            [min]="0"
            [max]="1"
            [intervals]="intervals"
            [styleOptions]="{childIntervalColor: 'yellow', mainIntervalColor: 'white'}">
</intervals>
```
 

