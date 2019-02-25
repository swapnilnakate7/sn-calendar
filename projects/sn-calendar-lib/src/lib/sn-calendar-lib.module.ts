import { NgModule } from '@angular/core';
import { SnCalendarLibComponent } from './sn-calendar-lib.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SnCalendarLibComponent],
  imports: [BrowserModule
  ],
  exports: [SnCalendarLibComponent]
})
export class SnCalendarLibModule { }
