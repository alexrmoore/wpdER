import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-titlescreen',
  templateUrl: './titlescreen.component.html',
  styleUrls: ['./titlescreen.component.css']
})
export class TitlescreenComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router,
              private lockedRoomsService: LockedRoomsService,
              private anonymousIdentifierService: AnonymousIdentifierService,
              private timersService: TimersService) { }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {}

  startButton(): void {
    // const hideTimerButton = document.getElementById('hideTimer') as HTMLInputElement;
    // this.router.navigateByUrl('/consent_form');
    this.router.navigateByUrl('/info-screen');

    // this.lockedRoomsService.roomLocked = [true, true, true, true, true, true, true, true];
    this.lockedRoomsService.roomLocked = [false, false, false, false, false, false, false, false];
    // this.lockedRoomsService.roomLocked = [false, false, false, false, false, true, true, true];
    // this.timersService.hideTimer = !(hideTimerButton.checked);

  }

}
