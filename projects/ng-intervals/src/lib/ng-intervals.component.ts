import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NgIntervalsService} from "./ng-intervals.service";

@Component({
  selector: 'intervals',
  templateUrl: './ng-intervals.component.html',
  styleUrls: ['./ng-intervals.component.scss']
})


export class NgIntervalsComponent implements OnInit, AfterViewInit {
  @Input() min!: number;
  @Input() max!: number;
  @Input() intervals: Intervals[] = [];
  @Input() styleOptions: StyleOptions = {};
  @Input() tooltip: boolean = false;
  @ViewChild('intervalsHandler', {static: true}) intervalsHandler!: ElementRef;
  @ViewChild('intervalTooltip', {static: false}) intervalTooltip!: ElementRef;
  @ViewChild('mainContainer', {static: true}) mainContainer!: ElementRef;
  public tooltipText!: string | null;

  constructor(private renderer: Renderer2,
              private intervalsService: NgIntervalsService) {
  }

  ngOnInit() {
    this.setDefaultStyle();
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.intervalsHandler.nativeElement, 'background', this.styleOptions.mainIntervalColor);
    this.renderer.setStyle(this.intervalsHandler.nativeElement, 'height', this.styleOptions.mainIntervalHeight + 'px');
    this.addInterval(this.intervals);
  }

  private addInterval(intervals: Intervals[]) {
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

  private setTooltip(intervalDiv: any, interval: any) {
    if (this.tooltip) {
      intervalDiv.dataset.interval = this.setBrackets('down', interval.lowerClose) + interval.lower + ';' + interval.upper +
        this.setBrackets('up', interval.upperClose);
      this.renderer.listen(intervalDiv, 'mouseenter', this.intervalMouseEnter);
      this.renderer.listen(intervalDiv, 'mouseleave', this.intervalMouseLeave);
    }
  }

  private setDefaultStyle() {
    this.intervalsService.isNullOrUndefined(this.styleOptions.mainIntervalColor) ? this.setOptionValue('mainIntervalColor', 'blue') : null;
    this.intervalsService.isNullOrUndefined(this.styleOptions.childIntervalColor) ? this.setOptionValue('childIntervalColor', 'red') : null;
    this.intervalsService.isNullOrUndefined(this.styleOptions.mainIntervalHeight) ? this.setOptionValue('mainIntervalHeight', '50px') : null;
  }

  private setOptionValue(key: string, value: any) {
    // @ts-ignore
    this.styleOptions[key] = value;
  }

  private setBrackets(type: string, value: any) {
    switch (type) {
      case 'down':
        return value ? '< ' : '( ';
      case 'up':
        return value ? ' >' : ' )';
    }
    return null;
  }

  private intervalMouseEnter = (event: any) => {
    this.tooltipText = event.target.dataset.interval;
    this.renderer.setStyle(this.intervalTooltip.nativeElement, 'display', 'block');
    setTimeout(() => {
      this.renderer.setStyle(this.intervalTooltip.nativeElement, 'top', event.clientY + 'px');
      if (event.clientX + this.intervalTooltip.nativeElement.offsetWidth > window.innerWidth) {
        this.renderer.setStyle(this.intervalTooltip.nativeElement, 'left', (window.innerWidth - this.intervalTooltip.nativeElement.offsetWidth - 25) + 'px');
      } else {
        this.renderer.setStyle(this.intervalTooltip.nativeElement, 'left', event.clientX + 'px');
      }
    });
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
  mainIntervalHeight?: string;
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
