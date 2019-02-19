import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnCalendarComponent } from './calendar/sn-calendar.component';

const routes: Routes = [{
  path: '', component: SnCalendarComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
