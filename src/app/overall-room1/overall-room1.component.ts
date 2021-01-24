import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { TimersService } from '../timers.service';


@Component({
  selector: 'app-overall-room1',
  templateUrl: './overall-room1.component.html',
  styleUrls: ['./overall-room1.component.css']
})
export class OverallRoom1Component implements OnInit {

  constructor(private router: Router,
              private lockedRoomsService: LockedRoomsService,
              private timersService: TimersService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onRightClick(){
    if (this.lockedRoomsService.firstCompletion[3]) {
      // tslint:disable-next-line:max-line-length
      this.timersService.roomTimes[3] = this.timersService.overallStopwatchSeconds - (this.timersService.roomTimes[2] + this.timersService.roomTimes[1] + this.timersService.roomTimes[0]);
      this.lockedRoomsService.firstCompletion[3] = false;
    }
    this.router.navigateByUrl('/complete_room');
  }

  // tslint:disable-next-line:typedef
  public onLeftClick(){
    this.router.navigateByUrl('/photoelectric_room3');
  }

  // tslint:disable-next-line:typedef
  public puzzle1Click(){
    this.router.navigateByUrl('/overall_room1_puzzle1');
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/overall_room1_info1');
  }

  // tslint:disable-next-line:typedef
  public info2Click(){
    this.router.navigateByUrl('/overall_room1_info2');
  }
}
