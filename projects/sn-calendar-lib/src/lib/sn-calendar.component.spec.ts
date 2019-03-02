/**
 * This is SnCalendarComponentSpec
 * Developed By Swapnil Nakate
 * Twitter: @SwapnilNakate7 Email:nakate.swapnil7@gmail.com
 * [***DO NOT REMOVE THIS***]
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnCalendarComponent } from './sn-calendar.component';

describe('SnCalendarComponent', () => {
  let component: SnCalendarComponent;
  let fixture: ComponentFixture<SnCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component._weekdays.length).toBe(7);
  });

  it('should have default locale', () => {
    expect(component._locale).toBe('en');
  });
});
