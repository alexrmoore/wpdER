import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LockedRoomsService {
  roomLocked = [true, true, true, true, true, true, true, true];
  endTimerStore = 0;

  firstCompletion = [true, true, true, true];

  constructor() {
  }

  /*
  // tslint:disable-next-line:typedef
  public whichRoomsLocked(roomLocked){
    console.log(roomLocked[0]);
    console.log(roomLocked[1]);
    console.log(roomLocked[2]);
  }
  */

}
