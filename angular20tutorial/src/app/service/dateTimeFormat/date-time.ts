import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DateTime {

  date = 'YYYY-MM-DD';
  locale = 'en-US';
  myDate = String()
  formatDate = formatDate(this.date, this.locale, this.myDate);
  constructor() { }
}
