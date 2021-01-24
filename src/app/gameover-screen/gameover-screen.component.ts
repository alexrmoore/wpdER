import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import {ConsentService} from '../consent.service';

@Component({
  selector: 'app-gameover-screen',
  templateUrl: './gameover-screen.component.html',
  styleUrls: ['./gameover-screen.component.css']
})
export class GameoverScreenComponent {

  constructor(private router: Router,
              private anonymousIdentifierService: AnonymousIdentifierService,
              private consentService: ConsentService) { }
  consentGiven = this.consentService.consentGiven;
  anonymousCode = this.anonymousIdentifierService.anonymousCode;



  onSurveyClick(): void {
    this.router.navigateByUrl('/postsurvey');
  }
}
