import { Component, Input } from "@angular/core";
import moment, { Moment } from "moment";
@Component({
  selector: 'sn-year',
  templateUrl :'sn-year.component.html',
  styleUrls: ['sn-year.component.scss']
})
export class SnYearComponent{
   _months:string[]=["January","February","March","April","May","June","July","August","September","October","November","December"];
   @Input()_year?:string;
   _currentDate:Moment;
   _selectedDateForYear:Moment;

   ngOnInit(){
     console.log(this._year);
     this._currentDate = moment();
   }

   getMonth(monthId:any){
    console.log(monthId);
     return moment([this._year,monthId]);
   }
}
