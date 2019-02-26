import { TestBed } from '@angular/core/testing';

import { SnCalendarService } from './sn-calendar.service';

describe('SnCalendarLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnCalendarService = TestBed.get(SnCalendarService);
    expect(service).toBeTruthy();
  });
});
