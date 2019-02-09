import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { LoggerService } from '../core/services/logger.service';

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
  _today?: any;
  _monthDays: any;
  _bigWeekArray: any[];
  _dayOfMonth: number;
  @Input() selectedDate?: any;
  constructor(private log: LoggerService) { }

  ngOnInit() {
    if (!this.selectedDate) {
      this.selectedDate = moment();
    }

    this._today = moment();
    this._daysInMonth = this.selectedDate.daysInMonth();
    this._dayOfMonth = this.selectedDate.date();
    this.setCurrentMonth();
  }


  setCurrentMonth() {
    const daysOfMonth = [[], [], [], [], [], [], []];
    let date;
    let firstDateSet = false;
    const _weekdatAtstartOfMonth = this.selectedDate.startOf('month').day() - 1;

    this._daysInMonth = this.selectedDate.daysInMonth();
    this._dayOfMonth = this.selectedDate.date();

    for (let i = 0, j = 0; i < 7; i++) {
      if (date === this._daysInMonth + 1) {
        break;
      }
      if (i === _weekdatAtstartOfMonth && !firstDateSet) {
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
    this._bigWeekArray = this.getNumberOfWeeks(this._monthDays);
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
    this.selectedDate.set('date', date);
    this._dayOfMonth = this.selectedDate.date();
  }

  updateMonth(updateTo: string) {
    const updateToOperation = { 'next': 1, 'previous': -1 };
    const month = updateTo ? updateToOperation[updateTo] : 'next';
    this.selectedDate.set('month', this.selectedDate.month() + month);
    this.setCurrentMonth();
    this.log.info('CalendarComponent.updateMonth(): ' + this.selectedDate);
  }
}
