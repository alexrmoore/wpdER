import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {
  consentGiven = true;
  constructor() { }
}
