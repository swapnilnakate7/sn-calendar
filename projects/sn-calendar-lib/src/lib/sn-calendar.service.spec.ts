/**
 * This is SnCalendarServiceSpec
 * Developed By Swapnil Nakate
 * Twitter: @SwapnilNakate7 Email:nakate.swapnil7@gmail.com
 * [***DO NOT REMOVE THIS***]
 */
import { TestBed } from '@angular/core/testing';

import { SnCalendarService } from './sn-calendar.service';

describe('SnCalendarLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnCalendarService = TestBed.get(SnCalendarService);
    expect(service).toBeTruthy();
  });
});
