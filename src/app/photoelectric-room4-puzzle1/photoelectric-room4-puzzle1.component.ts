import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { PuzzleTrackingService} from '../puzzle-tracking.service';
import { HintSelectionService} from '../hint-selection.service';

@Component({
  selector: 'app-photoelectric-room4-puzzle1',
  templateUrl: './photoelectric-room4-puzzle1.component.html',
  styleUrls: ['./photoelectric-room4-puzzle1.component.css']
})
export class PhotoelectricRoom4Puzzle1Component implements OnInit {
  puzzleWon = !(this.lockedRoomsService.roomLocked[5]);
  startingCoordinates = [[300, 0], [300, 300], [60, 100], [50, 0], [240, 140], [50, 230], [400, 120], [540, 220]];
  currentCoordinates = [[300, 0], [300, 300], [60, 100], [50, 0], [240, 140], [50, 230], [400, 120], [540, 220]];
  firstFade = true;

  constructor(private router: Router,
              private lockedRoomsService: LockedRoomsService,
              private puzzleTrackingService: PuzzleTrackingService,
              private hintSelection: HintSelectionService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/photoelectric_room4');
  }

  // tslint:disable-next-line:typedef
  dragEnd(event: CdkDragEnd, objectname, objectnumber) {
    this.currentCoordinates[objectnumber][0] = this.startingCoordinates[objectnumber][0] + event.source.getFreeDragPosition().x;
    this.currentCoordinates[objectnumber][1] = this.startingCoordinates[objectnumber][1] + event.source.getFreeDragPosition().y;
    // console.log(this.currentCoordinates);
  }

  // tslint:disable-next-line:typedef
  public submitClick(){
    const photoelectrons = document.getElementById('electrons');
    const ammeter = document.getElementById('ammeter');
    // Battery-y - Ammeter-y is between 125px and 145px
    // tslint:disable-next-line:max-line-length
    if ((this.currentCoordinates[6][1] - this.currentCoordinates[7][1]) >= 125 && (this.currentCoordinates[6][1] - this.currentCoordinates[7][1]) <= 145) {
      // console.log('1');
      // Battery-y - Wires-y is between 125px and 145px
      // tslint:disable-next-line:max-line-length
      if ((this.currentCoordinates[6][1] - this.currentCoordinates[5][1]) >= 125 && (this.currentCoordinates[6][1] - this.currentCoordinates[5][1]) <= 145) {
        // console.log('2');
        // Ammeter-y - Detector-y is between 25px and 45px
        // tslint:disable-next-line:max-line-length
        if ((this.currentCoordinates[7][1] - this.currentCoordinates[2][1]) >= 25 && (this.currentCoordinates[7][1] - this.currentCoordinates[2][1]) <= 45) {
          // console.log('3');
          // Detector-x - Ammeter-x is between 60px and 125px
          // tslint:disable-next-line:max-line-length
          if ((this.currentCoordinates[2][0] - this.currentCoordinates[7][0]) >= 60 && (this.currentCoordinates[2][0] - this.currentCoordinates[7][0]) <= 125) {
            // console.log('4');
            // Vacuum-x - Detector-x is between 0px and 55px
            // tslint:disable-next-line:max-line-length
            if ((this.currentCoordinates[0][0] - this.currentCoordinates[2][0]) >= 0 && (this.currentCoordinates[0][0] - this.currentCoordinates[2][0]) <= 55) {
              // console.log('5');
              // Detector-y - Vacuum-y is between 0px and 30px
              // tslint:disable-next-line:max-line-length
              if ((this.currentCoordinates[2][1] - this.currentCoordinates[0][1]) >= 0 && (this.currentCoordinates[2][1] - this.currentCoordinates[0][1]) <= 30) {
                // console.log('6');
                // Metal-x - Vacuum-x is between 160px and 235px
                // tslint:disable-next-line:max-line-length
                if ((this.currentCoordinates[3][0] - this.currentCoordinates[0][0]) >= 160 && (this.currentCoordinates[3][0] - this.currentCoordinates[0][0]) <= 235) {
                  // console.log('7');
                  // Metal-y - Vacuum-y is between 0px and 25px
                  // tslint:disable-next-line:max-line-length
                  if ((this.currentCoordinates[3][1] - this.currentCoordinates[0][1]) >= 0 && (this.currentCoordinates[3][1] - this.currentCoordinates[0][1]) <= 25) {
                    // console.log('8');
                    // Metal-y - Detector-y is less than 25px, and vice-versa
                    // tslint:disable-next-line:max-line-length
                    if ((this.currentCoordinates[3][1] - this.currentCoordinates[2][1]) <= 25 && (this.currentCoordinates[2][1] - this.currentCoordinates[3][1]) <= 25) {
                      // console.log('11');
                      // Metal-x - Detector-x is between 200px and 280px
                      // tslint:disable-next-line:max-line-length
                      if ((this.currentCoordinates[3][0] - this.currentCoordinates[2][0]) >= 200 && (this.currentCoordinates[3][0] - this.currentCoordinates[2][0]) <= 280) {
                        // console.log('12');
                        // Wires-y - Metal-y is between 28px and 48px
                        // tslint:disable-next-line:max-line-length
                        if ((this.currentCoordinates[5][1] - this.currentCoordinates[3][1]) >= 28 && (this.currentCoordinates[5][1] - this.currentCoordinates[3][1]) <= 48) {
                          // console.log('14');
                          // Wires-x - Metal-x is between 0px and 95px
                          // tslint:disable-next-line:max-line-length
                          if ((this.currentCoordinates[5][0] - this.currentCoordinates[3][0]) >= 0 && (this.currentCoordinates[5][0] - this.currentCoordinates[3][0]) <= 95) {
                            // console.log('15');
                            // Metal-x - Light-x is between 90px and 210px
                            // tslint:disable-next-line:max-line-length
                            const lightToMetalX = (this.currentCoordinates[3][0] - this.currentCoordinates[4][0]);
                            const lightToMetalY = (this.currentCoordinates[3][1] - this.currentCoordinates[4][1]);
                            const lighttoMetalUpperY = ((2 / 3) * lightToMetalX) + 20;
                            const lighttoMetalLowerY = ((2 / 3) * lightToMetalX) - 60;
                            // console.log(lightToMetalX);
                            // console.log(lightToMetalY);
                            // console.log(lighttoMetalUpperY);
                            // console.log(lighttoMetalLowerY);
                            if (lightToMetalX >= 90 && lightToMetalX <= 210) {
                              // console.log('16');
                              if (lightToMetalY >= lighttoMetalLowerY && lightToMetalY <= lighttoMetalUpperY) {
                                // console.log('Puzzle Complete');
                                this.lockedRoomsService.roomLocked[5] = false;
                                this.puzzleWon = true;
                                this.hintSelection.hintCounter = 0;
                                this.hintSelection.hintText = 'Click\n"New Hint"\nto get a hint';
                                this.hintSelection.hideNewHintButton = false;
                                if (this.firstFade) {
                                  photoelectrons.classList.toggle('fade');
                                  ammeter.classList.toggle('on');
                                  this.firstFade = false;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    // FLIPPED VERTICALLY
    // Ammeter-y - Battery-y is between 25px and 55px
    // tslint:disable-next-line:max-line-length
    else if ((this.currentCoordinates[7][1] - this.currentCoordinates[6][1]) >= 25 && (this.currentCoordinates[7][1] - this.currentCoordinates[6][1]) <= 55) {
      // console.log('1');
      // Wires-y - Battery-y is between 25px and 55px
      // tslint:disable-next-line:max-line-length
      if ((this.currentCoordinates[5][1] - this.currentCoordinates[6][1]) >= 25 && (this.currentCoordinates[5][1] - this.currentCoordinates[6][1]) <= 55) {
        // console.log('2');
        // Detector-y - Ammeter-y is between 123px and 153 px
        // tslint:disable-next-line:max-line-length
        if ((this.currentCoordinates[2][1] - this.currentCoordinates[7][1]) >= 123 && (this.currentCoordinates[2][1] - this.currentCoordinates[7][1]) <= 153) {
          // console.log('3');
          // Detector-x - Ammeter-x is between 60px and 125px
          // tslint:disable-next-line:max-line-length
          if ((this.currentCoordinates[2][0] - this.currentCoordinates[7][0]) >= 60 && (this.currentCoordinates[2][0] - this.currentCoordinates[7][0]) <= 125) {
            // console.log('4');
            // Vacuum-x - Detector-x is between 0px and 55px
            // tslint:disable-next-line:max-line-length
            if ((this.currentCoordinates[0][0] - this.currentCoordinates[2][0]) >= 0 && (this.currentCoordinates[0][0] - this.currentCoordinates[2][0]) <= 55) {
              // console.log('5');
              // Detector-y - Vacuum-y is between 0px and 30px
              // tslint:disable-next-line:max-line-length
              if ((this.currentCoordinates[2][1] - this.currentCoordinates[0][1]) >= 0 && (this.currentCoordinates[2][1] - this.currentCoordinates[0][1]) <= 30) {
                // console.log('6');
                // Metal-x - Vacuum-x is between 160px and 235px
                // tslint:disable-next-line:max-line-length
                if ((this.currentCoordinates[3][0] - this.currentCoordinates[0][0]) >= 160 && (this.currentCoordinates[3][0] - this.currentCoordinates[0][0]) <= 235) {
                  // console.log('7');
                  // Metal-y - Vacuum-y is between 0px and 25px
                  // tslint:disable-next-line:max-line-length
                  if ((this.currentCoordinates[3][1] - this.currentCoordinates[0][1]) >= 0 && (this.currentCoordinates[3][1] - this.currentCoordinates[0][1]) <= 25) {
                    // console.log('8');
                    // Metal-y - Detector-y is less than 25px, and vice-versa
                    // tslint:disable-next-line:max-line-length
                    if ((this.currentCoordinates[3][1] - this.currentCoordinates[2][1]) <= 25 && (this.currentCoordinates[2][1] - this.currentCoordinates[3][1]) <= 25) {
                      // console.log('11');
                      // Metal-x - Detector-x is between 200px and 280px
                      // tslint:disable-next-line:max-line-length
                      if ((this.currentCoordinates[3][0] - this.currentCoordinates[2][0]) >= 200 && (this.currentCoordinates[3][0] - this.currentCoordinates[2][0]) <= 280) {
                        // console.log('12');
                        // Metal-y - Wires-y is between 123px and 153px
                        // tslint:disable-next-line:max-line-length
                        if ((this.currentCoordinates[3][1] - this.currentCoordinates[5][1]) >= 123 && (this.currentCoordinates[3][1] - this.currentCoordinates[5][1]) <= 153) {
                          // console.log('14');
                          // Wires-x - Metal-x is between 0px and 95px
                          // tslint:disable-next-line:max-line-length
                          if ((this.currentCoordinates[5][0] - this.currentCoordinates[3][0]) >= 0 && (this.currentCoordinates[5][0] - this.currentCoordinates[3][0]) <= 95) {
                            // console.log('15');
                            // Metal-x - Light-x is between 90px and 210px
                            // tslint:disable-next-line:max-line-length
                            const lightToMetalX = (this.currentCoordinates[3][0] - this.currentCoordinates[4][0]);
                            const lightToMetalY = (this.currentCoordinates[3][1] - this.currentCoordinates[4][1]);
                            const lighttoMetalUpperY = ((2 / 3) * lightToMetalX) + 20;
                            const lighttoMetalLowerY = ((2 / 3) * lightToMetalX) - 60;
                            // console.log(lightToMetalX);
                            // console.log(lightToMetalY);
                            // console.log(lighttoMetalUpperY);
                            // console.log(lighttoMetalLowerY);
                            if (lightToMetalX >= 90 && lightToMetalX <= 210) {
                              // console.log('16');
                              if (lightToMetalY >= lighttoMetalLowerY && lightToMetalY <= lighttoMetalUpperY) {
                                // console.log('Puzzle Complete');
                                this.lockedRoomsService.roomLocked[5] = false;
                                this.puzzleWon = true;
                                if (this.firstFade) {
                                  photoelectrons.classList.toggle('fade');
                                  ammeter.classList.toggle('on');
                                  this.firstFade = false;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (!this.puzzleWon) {
      this.puzzleTrackingService.puzzleAttempts[5] = this.puzzleTrackingService.puzzleAttempts[5] + 1;
    }
  }
}
