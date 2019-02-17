import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CalendarModule, SnCalendarComponent} from '../../projects/calendar/src/public_api';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class SnCalendarModule { }
