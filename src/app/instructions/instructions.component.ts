import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  showStart = false;
  startSurveyURL = 'https://docs.google.com/forms/d/e/1FAIpQLScQiXQCsGKx1eoWEpBK8qvIgA3NkivqVyX4whowTCR7MUFBiQ/viewform?usp=pp_url&entry.906372509=';

  constructor(private router: Router,
              private anonymousIdentifierService: AnonymousIdentifierService,
              private timersService: TimersService) { }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

/*
  surveyClick(): void{
    this.startSurveyURL = this.startSurveyURL.concat(this.anonymousCode);
    window.open(this.startSurveyURL, '_blank');
    setTimeout(() => { this.showStart = true; }, 1000); // Increase the seconds at a later date
  } */

  startClick(): void{
    const hideTimerButton = document.getElementById('hideTimer') as HTMLInputElement;
    this.timersService.hideTimer = !(hideTimerButton.checked);
    this.timersService.startOverallTimer();
    this.router.navigateByUrl('/reflection_room1');
  }

}
