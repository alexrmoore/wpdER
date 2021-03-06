import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-overall-room1-info1',
  templateUrl: './overall-room1-info1.component.html',
  styleUrls: ['./overall-room1-info1.component.css']
})
export class OverallRoom1Info1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    if (this.lockedRoomsService.roomLocked[7]){
      this.router.navigateByUrl('/overall_room1_locked');
    }
    else {
      this.router.navigateByUrl('/overall_room1');
    }
  }

}
