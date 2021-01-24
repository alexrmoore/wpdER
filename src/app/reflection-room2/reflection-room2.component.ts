import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-reflection-room2',
  templateUrl: './reflection-room2.component.html',
  styleUrls: ['./reflection-room2.component.css']
})
export class ReflectionRoom2Component implements OnInit {
  firstCompletion = true;

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService, private timersService: TimersService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onRightClick(){
    this.router.navigateByUrl('/interference_room1');
    if (this.lockedRoomsService.firstCompletion[0]){
      this.timersService.roomTimes[0] = this.timersService.overallStopwatchSeconds;
      this.lockedRoomsService.firstCompletion[0] = false;
    }
  }

  // tslint:disable-next-line:typedef
  public onLeftClick(){
    this.router.navigateByUrl('/reflection_room1');
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    this.router.navigateByUrl('/reflection_room3');
  }

  // tslint:disable-next-line:typedef
  public onDownClick(){
    this.router.navigateByUrl('/reflection_room4');
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/reflection_room2_info1');
  }

  // tslint:disable-next-line:typedef
  public puzzle1Click(){
    this.router.navigateByUrl('/reflection_room2_puzzle1');
  }
}
