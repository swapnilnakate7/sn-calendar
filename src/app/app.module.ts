/**
 * This is SnCalendarMainModule
 * Developed By Swapnil Nakate
 * Twitter: @SwapnilNakate7 Email:nakate.swapnil7@gmail.com
 * [***DO NOT REMOVE THIS***]
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnCalendarModule } from '../../projects/sn-calendar-lib/src/public_api';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class SnCalendarMainModule { }
