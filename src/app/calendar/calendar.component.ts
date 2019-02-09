import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sn-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  _weekdays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  _daysInMonth: number;
  _currentDayinWeek: number;
  @Input() _today?: any;
  _monthDays: any;
  _weeksArray: any[];
  _dayOfMonth: number;
  constructor() { }

  ngOnInit() {
    if (!this._today) {
      this._today = moment();
    }
    this._daysInMonth = this._today.daysInMonth();
    this._dayOfMonth = this._today.date();
    this.setCurrentMonth();

   // console.log({ a: this._today, b: this._daysInMonth, c: this._currentDayinWeek, d: this._dayOfMonth });
  }


  setCurrentMonth() {
    const daysOfMonth = [[], [], [], [], [], [], []];
    let date;
    const startofMonth = this._today.startOf('month').day() - 1;

    let firstDateSet = false;
    for (let i = 0, j = 0; i < 7; i++) {
      if (date === this._daysInMonth + 1) {
        break;
      }
      if (i === (startofMonth) && !firstDateSet) {
        date = 1;
        firstDateSet = true;
      }
      daysOfMonth[i][j] = date;
      if (firstDateSet) {
        date++;
      }
      if (i === 6) {
        i = -1;
        j++;
      }
    }

    this._monthDays = daysOfMonth;
    this._weeksArray = this.getNumberOfWeeks(this._monthDays);

   // console.log('clender', daysOfMonth);
  }

  getNumberOfWeeks(month: [[]]) {
    let maxSize = 0;
    const weekArray: any[] = [];
    month.forEach((week) => {
      if (maxSize < week.length) {
        maxSize = week.length;
      }
    });
    for (let i = 0; i < maxSize; i++) {
      weekArray.push(0);
    }
    return weekArray;
  }

  setCurrentDate(date: number) {
    this._today = moment(date + '/' + this._today.month() + 1 + '/' + this._today.year(), 'DD/MM/YYYY');
    this._dayOfMonth = this._today.date();
  }
}
