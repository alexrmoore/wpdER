import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';


@Component({
  selector: 'app-interference-room4',
  templateUrl: './interference-room4.component.html',
  styleUrls: ['./interference-room4.component.css']
})
export class InterferenceRoom4Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    if (this.lockedRoomsService.roomLocked[4]){
      this.router.navigateByUrl('/interference_room3_locked');
    }
    else {
      this.router.navigateByUrl('/interference_room3');
    }
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/interference_room4_info1');
  }

  // tslint:disable-next-line:typedef
  public puzzle1Click(){
    this.router.navigateByUrl('/interference_room4_puzzle1');
  }
}
