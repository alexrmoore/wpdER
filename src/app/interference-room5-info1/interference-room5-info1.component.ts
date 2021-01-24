import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-interference-room5-info1',
  templateUrl: './interference-room5-info1.component.html',
  styleUrls: ['./interference-room5-info1.component.css']
})
export class InterferenceRoom5Info1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/interference_room5');
  }


}
