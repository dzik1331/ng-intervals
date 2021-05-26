import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIntervalsComponent } from './ng-intervals.component';

describe('NgIntervalsComponent', () => {
  let component: NgIntervalsComponent;
  let fixture: ComponentFixture<NgIntervalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIntervalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
