import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-interference-room3',
  templateUrl: './interference-room3.component.html',
  styleUrls: ['./interference-room3.component.css']
})
export class InterferenceRoom3Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService, private timersService: TimersService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onRightClick(){
    this.router.navigateByUrl('/photoelectric_room1');
    if (this.lockedRoomsService.firstCompletion[1]) {
      this.timersService.roomTimes[1] = this.timersService.overallStopwatchSeconds - this.timersService.roomTimes[0];
      this.lockedRoomsService.firstCompletion[1] = false;
    }
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    this.router.navigateByUrl('/interference_room1');
  }

  // tslint:disable-next-line:typedef
  public onDownClick(){
    this.router.navigateByUrl('/interference_room4');
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/interference_room3_info1');
  }

  // tslint:disable-next-line:typedef
  public puzzle1Click(){
    this.router.navigateByUrl('/interference_room3_puzzle1');
  }

}
