import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-photoelectric-room3-info1',
  templateUrl: './photoelectric-room3-info1.component.html',
  styleUrls: ['./photoelectric-room3-info1.component.css']
})
export class PhotoelectricRoom3Info1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    if (this.lockedRoomsService.roomLocked[6]){
      this.router.navigateByUrl('/photoelectric_room3_locked');
    }
    else {
      this.router.navigateByUrl('/photoelectric_room3');
    }
  }


}
