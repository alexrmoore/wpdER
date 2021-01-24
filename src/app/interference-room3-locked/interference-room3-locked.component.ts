import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-interference-room3-locked',
  templateUrl: './interference-room3-locked.component.html',
  styleUrls: ['./interference-room3-locked.component.css']
})
export class InterferenceRoom3LockedComponent implements OnInit {
  hidePuzzle1 = (this.lockedRoomsService.roomLocked[3]);

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
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
