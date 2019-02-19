import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SnCalendarComponent} from '../app/calendar/sn-calendar.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SnCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[SnCalendarComponent]
})
export class SnCalendarModule { }
