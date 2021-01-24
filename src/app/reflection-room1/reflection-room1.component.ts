import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-reflection-room1',
  templateUrl: './reflection-room1.component.html',
  styleUrls: ['./reflection-room1.component.css']
})
export class ReflectionRoom1Component implements OnInit {
  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onRightClick(){
    if (this.lockedRoomsService.roomLocked[0] && this.lockedRoomsService.roomLocked[1] || this.lockedRoomsService.roomLocked[2]){
      this.router.navigateByUrl('/reflection_room2_locked');
    }
    else {
      this.router.navigateByUrl('/reflection_room2');
    }
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/reflection_room1_info1');
  }


}
