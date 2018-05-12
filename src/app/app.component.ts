import {Component} from '@angular/core';
import {Intervals} from '../../projects/ng-intervals/src/lib/intervals.component';

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
    },
    {
      lower: 0.9,
      lowerClose: true,
      upper: 1,
      upperClose: true
    }
  ];
}
