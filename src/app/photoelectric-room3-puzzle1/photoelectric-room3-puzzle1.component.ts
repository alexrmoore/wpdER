import { Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { PuzzleTrackingService} from '../puzzle-tracking.service';
import { HintSelectionService} from '../hint-selection.service';

@Component({
  selector: 'app-photoelectric-room3-puzzle1',
  templateUrl: './photoelectric-room3-puzzle1.component.html',
  styleUrls: ['./photoelectric-room3-puzzle1.component.css']
})
export class PhotoelectricRoom3Puzzle1Component implements OnInit {
  puzzleWon = !(this.lockedRoomsService.roomLocked[6]);

  constructor(private router: Router,
              private lockedRoomsService: LockedRoomsService,
              private puzzleTrackingService: PuzzleTrackingService,
              private hintSelection: HintSelectionService) { }

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

  // tslint:disable-next-line:typedef
  public submitClick(){
    const photoelectriccheckboxA = document.getElementById('photoelectriccheckbox_a') as HTMLInputElement;
    const photoelectriccheckboxB = document.getElementById('photoelectriccheckbox_b') as HTMLInputElement;
    const photoelectriccheckboxC = document.getElementById('photoelectriccheckbox_c') as HTMLInputElement;
    const photoelectriccheckboxD = document.getElementById('photoelectriccheckbox_d') as HTMLInputElement;
    const photoelectriccheckboxE = document.getElementById('photoelectriccheckbox_e') as HTMLInputElement;

    // tslint:disable-next-line:max-line-length
    if (photoelectriccheckboxA.checked && !photoelectriccheckboxB.checked && photoelectriccheckboxC.checked && !photoelectriccheckboxD.checked && photoelectriccheckboxE.checked) {
      this.lockedRoomsService.roomLocked[6] = false;
      this.puzzleWon = true;
      this.hintSelection.hintCounter = 0;
      this.hintSelection.hintText = 'Click\n"New Hint"\nto get a hint';
      this.hintSelection.hideNewHintButton = false;
    } else {
      this.puzzleTrackingService.puzzleAttempts[6] = this.puzzleTrackingService.puzzleAttempts[6] + 1;
    }
  }
}
