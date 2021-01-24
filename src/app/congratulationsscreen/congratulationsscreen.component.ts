import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import { TimersService } from '../timers.service';
import { PuzzleTrackingService} from '../puzzle-tracking.service';
import {ConsentService} from '../consent.service';


@Component({
  selector: 'app-congratulationsscreen',
  templateUrl: './congratulationsscreen.component.html',
  styleUrls: ['./congratulationsscreen.component.css']
})
export class CongratulationsscreenComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  // endSurveyURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdMlSZ-fL1uHb14gsEFY2sGnPpeQAQ4fdXJPv5ExQ_KzKWJPg/viewform?usp=pp_url&entry.330561948=';

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private anonymousIdentifierService: AnonymousIdentifierService, private timersService: TimersService, private puzzleTrackingService: PuzzleTrackingService, private consentService: ConsentService) { }
  consentGiven = this.consentService.consentGiven;
  anonymousCode = this.anonymousIdentifierService.anonymousCode;
  timeToCompletion = this.timersService.finalOverallTime;
  timeString = this.timersService.finalTimeString;
  submitClicks = this.puzzleTrackingService.puzzleAttempts;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSurveyClick() {
    this.router.navigateByUrl('/postsurvey');
    // tslint:disable-next-line:max-line-length
    // this.endSurveyURL = this.endSurveyURL.concat(this.anonymousCode, '&entry.1216922865=', this.timeToCompletion.toString(), '-', this.timersService.roomTimes.toString(), '-', this.submitClicks.toString());
    // window.open(this.endSurveyURL, '_blank');
  }

}
