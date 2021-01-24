import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { PuzzleTrackingService} from '../puzzle-tracking.service';
import { HintSelectionService} from '../hint-selection.service';

@Component({
  selector: 'app-reflection-room3-puzzle1',
  templateUrl: './reflection-room3-puzzle1.component.html',
  styleUrls: ['./reflection-room3-puzzle1.component.css']
})

export class ReflectionRoom3Puzzle1Component implements OnInit {

  sliderRoom3Puzzle1Value = '0';
  puzzleWon = !(this.lockedRoomsService.roomLocked[0]);

  constructor(private router: Router,
              private lockedRoomsService: LockedRoomsService,
              private puzzleTrackingService: PuzzleTrackingService,
              private hintSelection: HintSelectionService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/reflection_room3');
  }

  // tslint:disable-next-line:typedef
  public submitClick(){
    const sliderRoom3Puzzle1 = document.getElementById('room3-puzzle1-slider') as HTMLInputElement;
    this.sliderRoom3Puzzle1Value = sliderRoom3Puzzle1.value;
    if (this.sliderRoom3Puzzle1Value === '25'){
      this.lockedRoomsService.roomLocked[0] = false;
      this.puzzleWon = true;
      if (!this.lockedRoomsService.roomLocked[0] && !this.lockedRoomsService.roomLocked[1]) {
        this.hintSelection.hintCounter = 0;
        this.hintSelection.hintText = 'Click\n"New Hint"\nto get a hint';
        this.hintSelection.hideNewHintButton = false;
      }
    } else {
      this.puzzleTrackingService.puzzleAttempts[0] = this.puzzleTrackingService.puzzleAttempts[0] + 1;
    }
  }

  // tslint:disable-next-line:typedef
  @HostListener('input', ['$event']) onSliderInput() {
    const sliderRoom3Puzzle1 = document.getElementById('room3-puzzle1-slider') as HTMLInputElement;
    this.sliderRoom3Puzzle1Value = sliderRoom3Puzzle1.value;
  }

}
