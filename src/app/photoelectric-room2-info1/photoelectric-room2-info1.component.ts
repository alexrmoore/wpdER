import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-photoelectric-room2-info1',
  templateUrl: './photoelectric-room2-info1.component.html',
  styleUrls: ['./photoelectric-room2-info1.component.css']
})
export class PhotoelectricRoom2Info1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/photoelectric_room2');
  }


}
