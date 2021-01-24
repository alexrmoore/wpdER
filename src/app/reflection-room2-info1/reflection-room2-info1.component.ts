import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-reflection-room2-info1',
  templateUrl: './reflection-room2-info1.component.html',
  styleUrls: ['./reflection-room2-info1.component.css']
})
export class ReflectionRoom2Info1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    if (this.lockedRoomsService.roomLocked[0] || this.lockedRoomsService.roomLocked[1] || this.lockedRoomsService.roomLocked[2]){
      this.router.navigateByUrl('/reflection_room2_locked');
    }
    else {
      this.router.navigateByUrl('/reflection_room2');
    }
  }

}
