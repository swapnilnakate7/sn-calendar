import { TestBed } from '@angular/core/testing';

import { SnCalendarLibService } from './sn-calendar-lib.service';

describe('SnCalendarLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnCalendarLibService = TestBed.get(SnCalendarLibService);
    expect(service).toBeTruthy();
  });
});
