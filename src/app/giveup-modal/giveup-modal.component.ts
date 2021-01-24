import { Component } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { TimersService } from '../timers.service';
import {RecentUrlService} from '../recent-url.service';

@Component({
  selector: 'app-giveup-modal',
  templateUrl: './giveup-modal.component.html',
  styleUrls: ['./giveup-modal.component.css']
})
export class GiveupModalComponent {

  constructor(public activeModal: NgbActiveModal,
              private router: Router,
              private timersService: TimersService,
              private recentUrl: RecentUrlService) { }

  close(): void {
    this.activeModal.close();
  }

  giveUp(): void {
    this.activeModal.close();
    this.recentUrl.giveUpUrl = this.router.url;
    this.router.navigateByUrl('/givenup');
    this.timersService.finalOverallTime = this.timersService.overallStopwatchSeconds;
    this.timersService.stopOverallTimer();
  }
}
