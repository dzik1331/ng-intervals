import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgIntervalsService {

  constructor() {
  }

  isNullOrUndefined(value: any) {
    return value === null || value === undefined;
  }
}
