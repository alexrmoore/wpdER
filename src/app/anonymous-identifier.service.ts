import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class AnonymousIdentifierService {
  footerTimerRef;
  anonymousCodeLong: string;
  anonymousCode: string;
  constructor() { }

  // tslint:disable-next-line:typedef
  generateUUID(){
    this.anonymousCodeLong = UUID.UUID();
    this.anonymousCode = this.anonymousCodeLong.slice(0, 8); // this.anonymousCodeLong.slice(0, 13)
  }
}
