import {AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'intervals',
  templateUrl: './intervals.component.html',
  styleUrls: ['./intervals.component.scss']
})


export class IntervalsComponent implements OnInit, AfterViewInit {
  @Input() min: number;
  @Input() max: number;
  @Input() intervals: Intervals[] = [];
  @Input() styleOptions: StyleOptions = {};
  @Input() tooltip: boolean = false;
  @ViewChild('intervalsHandler') intervalsHandler;
  @ViewChild('intervalTooltip') intervalTooltip;
  public tooltipText: string;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.setDefaultStyle();
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.intervalsHandler.nativeElement, 'background', this.styleOptions.mainIntervalColor);
    this.addInterval(this.intervals);
  }

  private addInterval(intervals) {
    intervals.forEach((interval: Intervals) => {
      let intervalDiv = this.renderer.createElement('div');

      this.setTooltip(intervalDiv, interval);

      let width = ((interval.upper - interval.lower) * 100) / (this.max - this.min);
      if (width === 0) {
        width = 1;
      }
      let left = ((interval.lower - this.min) * 100) / (this.max - this.min);

      this.renderer.addClass(intervalDiv, 'interval-child');
      this.renderer.setStyle(intervalDiv, 'width', width + '%');
      this.renderer.setStyle(intervalDiv, 'left', left + '%');
      this.renderer.setStyle(intervalDiv, 'background', this.styleOptions.childIntervalColor);
      this.renderer.appendChild(this.intervalsHandler.nativeElement, intervalDiv);
    });
  }

  private setTooltip(intervalDiv, interval) {
    if (this.tooltip) {
      intervalDiv.dataset.interval = this.setBrackets('down', interval.lowerClose) + interval.lower + ';' + interval.upper +
        this.setBrackets('up', interval.upperClose);
      this.renderer.listen(intervalDiv, 'mouseenter', this.intervalMouseEnter);
      this.renderer.listen(intervalDiv, 'mouseleave', this.intervalMouseLeave);
    }
  }

  private setDefaultStyle() {
    isNullOrUndefined(this.styleOptions.mainIntervalColor) ? this.setOptionValue('mainIntervalColor', 'blue') : null;
    isNullOrUndefined(this.styleOptions.childIntervalColor) ? this.setOptionValue('childIntervalColor', 'red') : null;
  }

  private setOptionValue(key, value) {
    this.styleOptions[key] = value;
  }

  private setBrackets(type, value) {
    switch (type) {
      case 'down':
        return value ? '< ' : '( ';
      case 'up':
        return value ? ' >' : ' )';
    }
  }

  private intervalMouseEnter = (event) => {
    this.tooltipText = event.target.dataset.interval;
    this.renderer.setStyle(this.intervalTooltip.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.intervalTooltip.nativeElement, 'top', event.clientY + 'px');
    this.renderer.setStyle(this.intervalTooltip.nativeElement, 'left', event.clientX + 'px');
  };

  private intervalMouseLeave = () => {
    this.tooltipText = null;
    this.renderer.setStyle(this.intervalTooltip.nativeElement, 'display', 'none');
  };
}


/** Iterfaces **/
export interface Intervals {
  lower: number;
  upper: number;
  lowerClose: boolean;
  upperClose: boolean;
}

export interface StyleOptions {
  mainIntervalColor?: string;
  childIntervalColor?: string;
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
