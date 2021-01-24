import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-photoelectric-room3',
  templateUrl: './photoelectric-room3.component.html',
  styleUrls: ['./photoelectric-room3.component.css']
})
export class PhotoelectricRoom3Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService, private timersService: TimersService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onRightClick(){
    if (this.lockedRoomsService.firstCompletion[2]){
      // tslint:disable-next-line:max-line-length
      this.timersService.roomTimes[2] = this.timersService.overallStopwatchSeconds - (this.timersService.roomTimes[1] + this.timersService.roomTimes[0]);
      this.lockedRoomsService.firstCompletion[2] = false;
    }
    if (this.lockedRoomsService.roomLocked[7]){
        this.router.navigateByUrl('/overall_room1_locked');
      }
    else {
      this.router.navigateByUrl('/overall_room1');
    }
  }

  // tslint:disable-next-line:typedef
  public onLeftClick(){
    this.router.navigateByUrl('/photoelectric_room1');
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    this.router.navigateByUrl('/photoelectric_room4');
  }

  // tslint:disable-next-line:typedef
  public onDownClick(){
    this.router.navigateByUrl('/photoelectric_room5');
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/photoelectric_room3_info1');
  }

  // tslint:disable-next-line:typedef
  public puzzle1Click(){
    this.router.navigateByUrl('/photoelectric_room3_puzzle1');
  }

}
