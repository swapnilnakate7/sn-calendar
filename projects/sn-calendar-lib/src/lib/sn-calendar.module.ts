/**
 * This is SnCalendarModule
 * Developed By Swapnil Nakate
 * Twitter: @SwapnilNakate7 Email:nakate.swapnil7@gmail.com
 * [***DO NOT REMOVE THIS***]
 */
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
