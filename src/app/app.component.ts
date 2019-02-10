import { Component } from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sn-calendar v0.0.0';
  date = moment('22/05/2019', 'DD/MM/YYYY');
  locale ='fr';

  getUpdatedDate(e:Moment) {
    this.date = e;
  }
}
