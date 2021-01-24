import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  currentPauseTime = 0;
  overallStopwatch: number;
  overallStopwatchSeconds: number;
  overallTimerRef;
  finalOverallTime: number;

  roomTimes = [0, 0, 0, 0];

  hideTimer = false;


  currentHours = 0;
  currentMins = 0;
  currentMinsTemp = 0;
  currentSecs = 0;
  finalTimeString: string;

  constructor() { }

  // tslint:disable-next-line:typedef
  startOverallTimer() {
    const startTime = Date.now() - (this.overallStopwatch || 0);
    this.overallTimerRef = setInterval(() => {
      this.overallStopwatch = (Date.now() - startTime) / 1000;
      this.overallStopwatch = this.overallStopwatch + this.currentPauseTime;
      this.overallStopwatchSeconds = Math.floor(this.overallStopwatch);

      this.currentMinsTemp = Math.floor(this.overallStopwatchSeconds / 60);
      this.currentSecs = this.overallStopwatchSeconds % 60;

      this.currentMins = this.currentMinsTemp % 60;
      this.currentHours = Math.floor(this.currentMinsTemp / 60);

      // THERE IS DEFINITELY A BETTER WAY TO DO THIS NEXT BIT OF CODE:

      let timerString = '';

      if (this.currentHours !== 0){
        timerString = timerString + this.currentHours.toString() + 'h, ';
        timerString = timerString + this.currentMins.toString() + 'm, ';
      }

      else if (this.currentMins !== 0){
        timerString = timerString + this.currentMins.toString() + 'm, ';
      }

      timerString = timerString + this.currentSecs.toString() + 's ';

      this.finalTimeString = timerString;
    });
  }

  // tslint:disable-next-line:typedef
  stopOverallTimer() {
    clearInterval(this.overallTimerRef);
  }
}
