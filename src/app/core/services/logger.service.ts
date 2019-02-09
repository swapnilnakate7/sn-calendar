import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(message: string) {
    console.log(message);
  }

  warn(message: string) {
    console.warn(message);
  }
}
