# SnCalendar
[![Lint,Test,Build](https://github.com/swapnilnakate7/sn-calendar/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/swapnilnakate7/sn-calendar/actions/workflows/node.js.yml)

This project uses [Moment.js] for calendar functionality. You can import the `SnCalendarModule` and use `SnCalendarComponent` straight away. Please feel free to report any bugs and I'll be happy to introduce any feature requests. For Demo: [Stable] | [Latest] 

## Using into your Angular Application

- run `npm i sn-calendar` into your project root directory.
- import `SnCalendarModule` into your application.
- use `<sn-calendar>` element.
- supports `locale`, `date(Moment Object)` as input. 
- use `selectedDateOut` event to get the selected date.
- supports  `restrictPast` to disable past dates, if not provided calendar will show previous  dates as well.

## Usage
 Importing `SnCalendarModule` into `app.module.ts`
 ```javascript
import { SnCalendarModule } from 'sn-calendar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 ```
Using `sn-calendar` component with options in `HTML`
 ```html
 <sn-calendar [selectedDate]="date"
[locale]="locale"
[startDayofWeek]="'sunday'"
(selectedDateOut)="getUpdatedDate($event)"
[restrictPast]="restrictPast" ></sn-calendar>
 ```
 | Attribute | Supported Type |
 | --- | --- |
 | `selectedDate` | `Moment` |
 | `locale` | `string` |
 | `startDayofWeek` | `string` |
 | `restrictPast` | `boolean` |


## Help
get in touch with me email: nakate.swapnil7@gmail.com | twitter: @SwapnilNakate7

[Moment.js]:https://momentjs.com/
[Latest]:https://swapnilnakate7.github.io/sn-calendar/
[Stable]:https://sn-calendar-demo.stackblitz.io/