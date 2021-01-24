import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-photoelectric-room3-locked',
  templateUrl: './photoelectric-room3-locked.component.html',
  styleUrls: ['./photoelectric-room3-locked.component.css']
})
export class PhotoelectricRoom3LockedComponent implements OnInit {
  hidePuzzle1 = (this.lockedRoomsService.roomLocked[5]);

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
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
