import { TestBed } from '@angular/core/testing';

import { NgIntervalsService } from './ng-intervals.service';

describe('NgIntervalsService', () => {
  let service: NgIntervalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIntervalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
