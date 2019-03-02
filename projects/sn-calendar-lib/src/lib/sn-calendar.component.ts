/**
 * This is SnCalendarComponent
 * Developed By Swapnil Nakate
 * Twitter: @SwapnilNakate7 Email:nakate.swapnil7@gmail.com
 * [***DO NOT REMOVE THIS***]
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import moment from 'moment';
import { SnCalendarService } from './sn-calendar.service';
import { Moment } from 'moment';
@Component({
  selector: 'sn-calendar',
  templateUrl: './sn-calendar.component.html',
  styleUrls: ['./sn-calendar.component.scss']
})
export class SnCalendarComponent implements OnInit {

  _weekdays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  _daysInMonth: number;
  _currentDayinWeek: number;
  _today?: any;
  _monthDays: any;
  _bigWeekArray: any[];
  _dayOfMonth: number;
  _locale: string;
  _months: string[];
  _restrictPast: boolean;

  @Input() startDayofWeek?: string;
  @Input() locale?: string;
  @Input() selectedDate?: Moment;
  @Input() restrictPast?: boolean;
  @Output() selectedDateOut?: EventEmitter<Moment> = new EventEmitter<Moment>();

  constructor(private log: SnCalendarService) { }

  ngOnInit() {
    this._locale = this.locale ? this.locale : 'en';
    this.log.info('Current Locale: ' + this._locale);
    this._today = moment();

    if (!this.selectedDate) {
      this.selectedDate = moment();
      this.log.warn('CalendarComponent.ngOnInit(): You did not provide the custom date');
    }

    if (typeof this.restrictPast !== 'undefined') {
      this._restrictPast = this.restrictPast;
    }

    this.selectedDate = moment(this.selectedDate.toISOString());

    this.setLocale(this._today, this.selectedDate);

    this._months = this._today['_locale']['_months'];

    if (!this.startDayofWeek) {
      this._weekdays = this._today['_locale']['_weekdays'];
      this.log.warn('CalendarComponent.ngOnInit(): You did not provide the custom start of the week');
    }

    if (this.startDayofWeek && this.startDayofWeek === 'sunday') {
      this._weekdays = this._today['_locale']['_weekdays'];
    }

    this.selectedDateOut.emit(this.selectedDate);

    this._daysInMonth = this.selectedDate.daysInMonth();
    this._dayOfMonth = this.selectedDate.date();
    this.setCurrentMonth(this.selectedDate);

  }


  /**
   * This function updates the dates corrosponding to the current month
   * according to the selected date
   * @selectedDate {Moment}
   */
  setCurrentMonth(selectedDate: Moment) {
    const daysOfMonth = [[], [], [], [], [], [], []];
    let date = 0;
    let firstDateSet = false;
    let _weekdatAtstartOfMonth = selectedDate.startOf('month').day();
    if (this.startDayofWeek === 'monday') {
      _weekdatAtstartOfMonth = (selectedDate.startOf('month').day() === 0) ? 0 :
        selectedDate.startOf('month').day() - 1;
    }

    for (let i = 0, j = 0; i < 7; i++) {
      if (date === selectedDate.daysInMonth() + 1) {
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

  /**
   * This  function sets the max _bigWeekArray[] in order to iterate
   * through the available weeks
   * @month {Array}
   */
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

  /**
   * This updates the current date according to the date selection
   * @date {number}
   */
  setCurrentDate(date: number) {
    this.selectedDate.set('date', date);
    this._dayOfMonth = this.selectedDate.date();

    this.selectedDate = moment(this.selectedDate.toISOString());

    this.selectedDateOut.emit(this.selectedDate);
    this.log.info('CalendarComponent.setCurrentDate(): ' + this.selectedDate.toString());
  }

  /**
   * This updates the month according to month navigation
   * @updateTo {string}
   */
  updateMonth(updateTo: string) {
    const updateToOperation = { 'next': 1, 'previous': -1 };
    const month = updateTo ? updateToOperation[updateTo] : 'next';

    this.selectedDate.set('month', this.selectedDate.month() + month);
    this.selectedDate = moment(this.selectedDate.toISOString());

    this.setCurrentMonth(this.selectedDate);
    this._dayOfMonth = this.selectedDate.date();

    this.selectedDateOut.emit(this.selectedDate);
    this.log.info('CalendarComponent.updateMonth(): ' + this.selectedDate.toString());
  }

  /**
   * This will disable all the past dates
   * @date {number} current date
   * @selectedDate {Moment} current date
   */
  disableDatesBefore(date: number, selectedDate: Moment) {
    const selectedMonth = selectedDate.month();
    const selectedYear = selectedDate.year();
    const currentMonth = this._today.month();
    const currentYear = this._today.year();
    const currentDate = this._today.date();

    if (!this._restrictPast) {
      return false;
    }

    if (selectedYear === currentYear) {
      if (selectedMonth < currentMonth) {
        return true;
      } else if (selectedMonth === currentMonth && date < currentDate) {
        return true;
      }
    } else if (selectedYear < currentYear) {
      return true;
    }
    return false;
  }

  /**
   * This will set the locale for given dates
   * @dates {Moment}
   */
  setLocale(...dates: Moment[]) {
    const locale = this._locale;
    dates.forEach((date) => {
      date.locale(locale);
    });

  }

  /**
   * returns Month as a string
   * @index {number}
   */
  getMonth(index: number) {
    if (index < 0) {
      return this._months[11];
    }
    if (index > 11) {
      return this._months[0];
    }
    return this._months[index];
  }

  /**
   * returns converted  number according to locale
   * @number {number}
   */
  getLocaleNumber(number: number) {
    return number.toLocaleString(this._locale);
  }
}
