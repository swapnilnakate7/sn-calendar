import { NgModule } from '@angular/core';
import { SnCalendarComponent } from './sn-calendar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SnCalendarComponent],
  imports: [
    CommonModule
  ],
  exports: [SnCalendarComponent]
})
export class CalendarModule { }
