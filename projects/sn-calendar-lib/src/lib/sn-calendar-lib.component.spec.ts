import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnCalendarLibComponent } from './sn-calendar-lib.component';

describe('SnCalendarLibComponent', () => {
  let component: SnCalendarLibComponent;
  let fixture: ComponentFixture<SnCalendarLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnCalendarLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnCalendarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
