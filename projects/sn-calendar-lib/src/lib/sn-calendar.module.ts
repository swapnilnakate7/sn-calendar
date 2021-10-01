/**
 * This is SnCalendarModule
 * Developed By Swapnil Nakate
 * Twitter: @SwapnilNakate7 Email:nakate.swapnil7@gmail.com
 * [***DO NOT REMOVE THIS***]
 */
import { NgModule } from '@angular/core';
import { SnCalendarComponent } from './sn-calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { SnYearComponent } from './sn-year/sn-year.component';

@NgModule({
  declarations: [SnCalendarComponent, SnYearComponent],
  imports: [BrowserModule
  ],
  exports: [SnCalendarComponent,SnYearComponent]
})
export class SnCalendarModule { }
