/**
 * This is SnCalendarComponent
 * Developed By Swapnil Nakate
 * Twitter: @SwapnilNakate7 Email:nakate.swapnil7@gmail.com
 * [***DO NOT REMOVE THIS***]
 */
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import moment from 'moment';
import { SnCalendarService } from './sn-calendar.service';
import { Moment } from 'moment';
import { NgClass } from '@angular/common';
@Component({
    selector: 'sn-calendar',
    templateUrl: './sn-calendar.component.html',
    styleUrls: ['./sn-calendar.component.scss'],
    standalone: true,
    imports: [NgClass]
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
  _dateRange:any[]=[];

  @Input() type?:string;
  @Input() currentMonth?: Moment;

  @Input() startDayofWeek?: string;
  @Input() locale?: string;
  @Input() selectedDate?: Moment;
  @Input() restrictPast?: boolean;
  @Input() enableDateRange?:boolean = false;
  @Output() dateSelected?: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() dateRangeSelected?:EventEmitter<any> = new EventEmitter<any>();

  constructor(private log: SnCalendarService,private renderer:Renderer2) { }

  ngOnInit() {
    this._locale = this.locale ? this.locale : 'en';
    this.log.info('Current Locale: ' + this._locale);
    this._today = moment();

    if(!this.type){
      this.type='month';
    }

    if(this.type == 'year'){
      this.setCurrentMonth(this.currentMonth);
      this.selectedDate = this.currentMonth;
    }

    if (!this.selectedDate && this.type == 'month') {
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

    this.dateSelected.emit(this.selectedDate);

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
    /**
     * daysOfMonth = | 1,8,15,22,29|
     *               | 2,9,16,23,30|
     *               | 3,10,17,24,31|
     *               | 4,11,18,25   |
     *               | 5,12,19,26   |
     *               | 6,13,20,27   |
     *               | 7,14,21,28   |
     */
    const daysOfMonth = [[], [], [], [], [], [], []];
    let date = 0;
    let firstDateSet = false;
    let _weekdayAtstartOfMonth = selectedDate.startOf('month').day();
    if (this.startDayofWeek === 'monday') {
      _weekdayAtstartOfMonth = (selectedDate.startOf('month').day() === 0) ? 0 :
        selectedDate.startOf('month').day() - 1;
    }

    for (let i = 0, j = 0; i < 7; i++) {
      if (date === selectedDate.daysInMonth() + 1) {
        break;
      }
      if (i === _weekdayAtstartOfMonth && !firstDateSet) {
        date = 1;
        firstDateSet = true;
      }
      daysOfMonth[i][j] = date;
      /**
       * When first date is set increase the date
       */
      if (firstDateSet) {
        date++;
      }

      /**
       * When first week is completed start from 0 and fill the second column in the matrix
       */
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
    
    if(this.enableDateRange){
      this.updateDateRange(date);
    }
   

    this.selectedDate = moment(this.selectedDate.toISOString());

    this.dateSelected.emit(this.selectedDate);
    this.log.info('CalendarComponent.setCurrentDate(): ' + this.selectedDate.toString());
    this.log.info('CalendarComponent.setCurrentDate(): ' + this._dateRange);
  }

  updateDateRange(date:number){
    if(this._dateRange.length == 0 || this._dateRange.length == 2){
      this._dateRange =[]
    }
    if(this._dateRange.length == 1 && this._dateRange[0] < date){
      this._dateRange.push(date);
    }else if(this._dateRange.length ==0 && this.selectedDate.daysInMonth() !== date){
      this._dateRange.push(date);
    }

    if(this._dateRange.length == 2){
     let start = moment().set('date',this._dateRange[0]);
     let end  = moment().set('date',this._dateRange[1]);
     const eventData = {start,end};
     this.dateRangeSelected.emit(eventData);
     console.log('CalendarComponent.setCurrentDate() eventData: ', eventData);
    }
  }



  isDateInRange(date:number){
     let flag = false;
     if(this.enableDateRange){
      if(this._dateRange.length == 2 && this._dateRange[0] <= date && this._dateRange[1] >= date){
        flag = true;
      }
      if(this._dateRange.length == 1 && this._dateRange[0] <= date){
        flag = true;
      }
     }
     
    return flag;
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

    this.dateSelected.emit(this.selectedDate);
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
