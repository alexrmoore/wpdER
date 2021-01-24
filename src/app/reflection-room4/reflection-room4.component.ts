import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-reflection-room4',
  templateUrl: './reflection-room4.component.html',
  styleUrls: ['./reflection-room4.component.css']
})
export class ReflectionRoom4Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    if (this.lockedRoomsService.roomLocked[0] || this.lockedRoomsService.roomLocked[1] || this.lockedRoomsService.roomLocked[2]){
      this.router.navigateByUrl('/reflection_room2_locked');
    }
    else {
      this.router.navigateByUrl('/reflection_room2');
    }
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/reflection_room4_info1');
  }

  // tslint:disable-next-line:typedef
  public puzzle1Click(){
    this.router.navigateByUrl('/reflection_room4_puzzle1');
  }

}
