import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-photoelectric-room5-info2',
  templateUrl: './photoelectric-room5-info2.component.html',
  styleUrls: ['./photoelectric-room5-info2.component.css']
})
export class PhotoelectricRoom5Info2Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/photoelectric_room5');
  }

}
