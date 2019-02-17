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
  });
});
