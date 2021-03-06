import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-photoelectric-room5',
  templateUrl: './photoelectric-room5.component.html',
  styleUrls: ['./photoelectric-room5.component.css']
})
export class PhotoelectricRoom5Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    if (this.lockedRoomsService.roomLocked[6]){
      this.router.navigateByUrl('/photoelectric_room3_locked');
    }
    else {
      this.router.navigateByUrl('/photoelectric_room3');
    }
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/photoelectric_room5_info1');
  }

  // tslint:disable-next-line:typedef
  public info2Click(){
    this.router.navigateByUrl('/photoelectric_room5_info2');
  }

}
