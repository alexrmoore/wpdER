import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { PuzzleTrackingService} from '../puzzle-tracking.service';
import { HintSelectionService} from '../hint-selection.service';

@Component({
  selector: 'app-overall-room1-puzzle1',
  templateUrl: './overall-room1-puzzle1.component.html',
  styleUrls: ['./overall-room1-puzzle1.component.css']
})
export class OverallRoom1Puzzle1Component implements OnInit {
  puzzleWon = !(this.lockedRoomsService.roomLocked[7]);


  constructor(private router: Router,
              private lockedRoomsService: LockedRoomsService,
              private puzzleTrackingService: PuzzleTrackingService,
              private hintSelection: HintSelectionService) { }

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

  // tslint:disable-next-line:typedef
  public submitClick(){
    const reflectioncheckboxW = document.getElementById('reflectioncheckbox_wave') as HTMLInputElement;
    const reflectioncheckboxP = document.getElementById('reflectioncheckbox_particle') as HTMLInputElement;
    const interferencecheckboxW = document.getElementById('interferencecheckbox_wave') as HTMLInputElement;
    const interferencecheckboxP = document.getElementById('interferencecheckbox_particle') as HTMLInputElement;
    const photoelectriccheckboxW = document.getElementById('photoelectriccheckbox_wave') as HTMLInputElement;
    const photoelectriccheckboxP = document.getElementById('photoelectriccheckbox_particle') as HTMLInputElement;
    // tslint:disable-next-line:max-line-length
    if (reflectioncheckboxW.checked && reflectioncheckboxP.checked) {
      if (interferencecheckboxW.checked && !interferencecheckboxP.checked) {
        if (!photoelectriccheckboxW.checked && photoelectriccheckboxP.checked) {
          this.lockedRoomsService.roomLocked[7] = false;
          this.puzzleWon = true;
          this.hintSelection.hintCounter = 0;
          this.hintSelection.hintText = 'You\'ve completed the Escape Room!';
          this.hintSelection.hideNewHintButton = true;
        }
      }
    }
    if (!this.puzzleWon) {
      this.puzzleTrackingService.puzzleAttempts[7] = this.puzzleTrackingService.puzzleAttempts[7] + 1;
    }
  }

}
