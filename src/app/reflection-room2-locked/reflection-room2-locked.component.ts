import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-reflection-room2-locked',
  templateUrl: './reflection-room2-locked.component.html',
  styleUrls: ['./reflection-room2-locked.component.css']
})
export class ReflectionRoom2LockedComponent implements OnInit {

  hidePuzzle1 = (this.lockedRoomsService.roomLocked[0] || this.lockedRoomsService.roomLocked[1]);

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
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
