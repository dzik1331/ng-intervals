import {AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'ranges',
  templateUrl: './intervals.component.html',
  styleUrls: ['./intervals.component.scss']
})


export class IntervalsComponent implements OnInit, AfterViewInit {
  @Input() min;
  @Input() max;
  @Input() ranges: Intervals[] = [];
  @ViewChild('intervalsHandler') intervalsHandler;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.addInterval(this.ranges);
  }

  private addInterval(intervals) {
    intervals.forEach((interval: Intervals) => {
      let intervalDiv = this.renderer.createElement('div');
      let width = ((interval.upper - interval.lower) * 100) / (this.max - this.min);
      if (width === 0) {
        width = 1;
      }
      let left = ((interval.lower - this.min) * 100) / (this.max - this.min);
      this.renderer.addClass(intervalDiv, 'interval-child');

      this.renderer.setStyle(intervalDiv, 'width', width + '%');
      this.renderer.setStyle(intervalDiv, 'left', left + '%');
      let color = this.randomColor();
      this.renderer.setStyle(intervalDiv, 'background', color);
      this.renderer.appendChild(this.intervalsHandler.nativeElement, intervalDiv);
    });
  }

  randomColor(): string {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }
}


/** Iterfaces **/
export interface Intervals {
  lower: number;
  upper: number;
  lowerClose: boolean;
  upperClose: boolean;
}

const COLORS = [
  'red',
  'yellow',
  'black',
  'green',
  'aqua',
  'greenyellow',
  'blue',
  'pink',
  'grey',
  'blueviolet',
  'darkmagenta',
  'chocolate',
  'darkorange'
];
