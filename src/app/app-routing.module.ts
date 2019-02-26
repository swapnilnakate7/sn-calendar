import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SnCalendarComponent} from '../../projects/sn-calendar-lib/src/public_api';
//import {SnCalendarComponent} from '../../dist/sn-calendar';

const routes: Routes = [{
  path: '', component: SnCalendarComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
