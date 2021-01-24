import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-complete-room',
  templateUrl: './complete-room.component.html',
  styleUrls: ['./complete-room.component.css']
})
export class CompleteRoomComponent implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService, private timersService: TimersService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onLeftClick(){
    this.router.navigateByUrl('/overall_room1');
  }

  // tslint:disable-next-line:typedef
  public onEndClick(){
    this.router.navigateByUrl('/congratulations');
    this.timersService.finalOverallTime = this.timersService.overallStopwatchSeconds;
    this.timersService.stopOverallTimer();
  }

}
