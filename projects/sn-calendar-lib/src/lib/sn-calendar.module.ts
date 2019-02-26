import { NgModule } from '@angular/core';
import { SnCalendarComponent } from './sn-calendar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SnCalendarComponent],
  imports: [BrowserModule
  ],
  exports: [SnCalendarComponent]
})
export class SnCalendarModule { }
