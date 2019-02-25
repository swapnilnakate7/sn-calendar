import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnCalendarComponent } from './calendar/sn-calendar.component';
import {SnCalendarLibComponent} from '../../projects/sn-calendar-lib/src/public_api';

const routes: Routes = [{
  path: '', component: SnCalendarLibComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
