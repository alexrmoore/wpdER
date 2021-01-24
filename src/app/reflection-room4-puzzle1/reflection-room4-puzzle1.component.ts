import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { PuzzleTrackingService} from '../puzzle-tracking.service';
import { HintSelectionService} from '../hint-selection.service';

@Component({
  selector: 'app-reflection-room4-puzzle1',
  templateUrl: './reflection-room4-puzzle1.component.html',
  styleUrls: ['./reflection-room4-puzzle1.component.css']
})
export class ReflectionRoom4Puzzle1Component implements OnInit {

  sliderRoom4Puzzle1Value = '0';
  puzzleWon = !(this.lockedRoomsService.roomLocked[1]);


  constructor(private router: Router,
              private lockedRoomsService: LockedRoomsService,
              private puzzleTrackingService: PuzzleTrackingService,
              private hintSelection: HintSelectionService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/reflection_room4');
  }

  // tslint:disable-next-line:typedef
  public submitClick(){
    const sliderRoom4Puzzle1 = document.getElementById('room4-puzzle1-slider') as HTMLInputElement;
    this.sliderRoom4Puzzle1Value = sliderRoom4Puzzle1.value;
    if (this.sliderRoom4Puzzle1Value === '55'){
      this.lockedRoomsService.roomLocked[1] = false;
      this.puzzleWon = true;
      if (!this.lockedRoomsService.roomLocked[0] && !this.lockedRoomsService.roomLocked[1]) {
        this.hintSelection.hintCounter = 0;
        this.hintSelection.hintText = 'Click\n"New Hint"\nto get a hint';
        this.hintSelection.hideNewHintButton = false;
      }
    }
    else {
      this.puzzleTrackingService.puzzleAttempts[1] = this.puzzleTrackingService.puzzleAttempts[1] + 1;
    }
  }

  // tslint:disable-next-line:typedef
  @HostListener('input', ['$event']) onSliderInput() {
    const sliderRoom4Puzzle1 = document.getElementById('room4-puzzle1-slider') as HTMLInputElement;
    this.sliderRoom4Puzzle1Value = sliderRoom4Puzzle1.value;
  }

}
