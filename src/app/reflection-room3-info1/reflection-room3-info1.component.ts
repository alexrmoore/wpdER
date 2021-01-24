import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';


@Component({
  selector: 'app-reflection-room3-info1',
  templateUrl: './reflection-room3-info1.component.html',
  styleUrls: ['./reflection-room3-info1.component.css']
})
export class ReflectionRoom3Info1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/reflection_room3');
  }

}
