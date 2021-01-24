import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-photoelectric-room2',
  templateUrl: './photoelectric-room2.component.html',
  styleUrls: ['./photoelectric-room2.component.css']
})
export class PhotoelectricRoom2Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    this.router.navigateByUrl('/photoelectric_room1');
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/photoelectric_room2_info1');
  }
}
