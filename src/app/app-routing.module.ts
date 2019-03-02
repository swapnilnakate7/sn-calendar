/**
 * This is AppRoutingModule
 * Developed By Swapnil Nakate
 * Twitter: @SwapnilNakate7 Email:nakate.swapnil7@gmail.com
 * [***DO NOT REMOVE THIS***]
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SnCalendarComponent} from '../../projects/sn-calendar-lib/src/public_api';

const routes: Routes = [{
  path: '', component: SnCalendarComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
