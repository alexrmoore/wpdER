import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HintSelectionService} from '../hint-selection.service';

@Component({
  selector: 'app-hint-modal',
  templateUrl: './hint-modal.component.html',
  styleUrls: ['./hint-modal.component.css']
})
export class HintModalComponent implements OnInit{
  hintText = 'Click\n"New Hint"\nto get a hint';
  hideNewHint: boolean;
  hideHintTimer = false;
  booleanRefreshRef;
  showTooltip = false;
  timerValue = 30;
  hintResest = 30;
  countdownTimer = 30;

  constructor(public activeModal: NgbActiveModal,
              private hintSelection: HintSelectionService) { }


  ngOnInit(): void {
    this.refreshText();
    this.hideNewHint = this.hintSelection.hideNewHintButton;
    this.booleanRefreshRef = setInterval(() => {
      this.hideHintTimer = this.hintSelection.buttonHideTimer;
      if (this.hideHintTimer === false) {
        clearInterval(this.booleanRefreshRef);
      }
      this.timerValue = this.hintSelection.hintStopwatch / 1000;
      this.countdownTimer = this.hintResest - this.timerValue;
      this.countdownTimer = Math.ceil(this.countdownTimer);
    });
  }

  close(): void {
    this.activeModal.close();
  }

  newHint(): void {
    this.hideHintTimer = true;
    this.hintSelection.HintPicker();
    this.hintText = this.hintSelection.hintText;
    this.hideNewHint = this.hintSelection.hideNewHintButton;
    this.hintSelection.startHintTimer(30000);
    this.booleanRefreshRef = setInterval(() => {
      this.hideHintTimer = this.hintSelection.buttonHideTimer;
      if (this.hideHintTimer === false) {
        clearInterval(this.booleanRefreshRef);
      }
      this.timerValue = this.hintSelection.hintStopwatch / 1000;
      this.countdownTimer = this.hintResest - this.timerValue;
      this.countdownTimer = Math.ceil(this.countdownTimer);
    });
  }

  refreshText(): void {
    this.hintText = this.hintSelection.hintText;
  }
}
