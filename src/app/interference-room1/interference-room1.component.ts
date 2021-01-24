import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-interference-room1',
  templateUrl: './interference-room1.component.html',
  styleUrls: ['./interference-room1.component.css']
})
export class InterferenceRoom1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onRightClick(){
    this.router.navigateByUrl('/interference_room2');
  }

  // tslint:disable-next-line:typedef
  public onLeftClick(){
    this.router.navigateByUrl('/reflection_room2');
  }

  // tslint:disable-next-line:typedef
  public onDownClick(){
    if (this.lockedRoomsService.roomLocked[4]){
      this.router.navigateByUrl('/interference_room3_locked');
    }
    else {
      this.router.navigateByUrl('/interference_room3');
    }
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/interference_room1_info1');
  }

}
