import { Component, OnInit, HostListener } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import { TimersService } from '../timers.service';
import { PuzzleTrackingService} from '../puzzle-tracking.service';
import {RecentUrlService} from '../recent-url.service';
import { HintSelectionService} from '../hint-selection.service';

@Component({
  selector: 'app-post-surveyscreen',
  templateUrl: './post-surveyscreen.component.html',
  styleUrls: ['./post-surveyscreen.component.css']
})
export class PostSurveyscreenComponent implements OnInit {
  PostSurveyUrl = 'https://jpqkvwktd6k.typeform.com/to/YbQlKy1K#anonymousid=';

  constructor(private router: Router,
              private anonymousIdentifierService: AnonymousIdentifierService,
              private timersService: TimersService,
              private puzzleTrackingService: PuzzleTrackingService,
              private recentUrl: RecentUrlService,
              private hintSelection: HintSelectionService) {
                this.PostSurveyUrl = this.PostSurveyUrl.concat(anonymousIdentifierService.anonymousCode);
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&timetocomplete=', this.timeToCompletion.toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&reflectiontime=', this.timersService.roomTimes[0].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&interferencetime=', this.timersService.roomTimes[1].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&photoelectrictime=', this.timersService.roomTimes[2].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&overallroomtime=', this.timersService.roomTimes[3].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&submit_reflection1=', this.submitClicks[0].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&submit_reflection2=', this.submitClicks[1].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&submit_reflection3=', this.submitClicks[2].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&submit_interference1=', this.submitClicks[3].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&submit_interference2=', this.submitClicks[4].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&submit_photoelectric1=', this.submitClicks[5].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&submit_photoelectric2=', this.submitClicks[6].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&submit_overall1=', this.submitClicks[7].toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&giveup_url=', this.recentUrl.giveUpUrl);
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&hint_count=', this.hintSelection.totalHintCount.toString());
                this.PostSurveyUrl = this.PostSurveyUrl.concat('&timer_shown=', (!this.timersService.hideTimer).toString());
  }

  timeToCompletion = this.timersService.finalOverallTime;
  timeString = this.timersService.finalTimeString;
  submitClicks = this.puzzleTrackingService.puzzleAttempts;

  ngOnInit(): void {
    const container = document.getElementById('container');
    const widgetNode = document.getElementById('surveywidget');
    const newWidget = document.createElement('div');
    typeformEmbed.makeWidget(newWidget, this.PostSurveyUrl, {
      hideFooter: false,
      hideHeaders: true,
    });
    newWidget.style.zIndex = '50';
    newWidget.style.position = 'absolute';
    newWidget.style.width = '800px';
    newWidget.style.height = '550px';
    container.insertBefore(newWidget, widgetNode);
  }

}
