import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConsentService} from '../consent.service';

@Component({
  selector: 'app-consent-form-failed',
  templateUrl: './consent-form-failed.component.html',
  styleUrls: ['./consent-form-failed.component.css']
})
export class ConsentFormFailedComponent implements OnInit {

  constructor(private router: Router, private consentService: ConsentService) { }

  ngOnInit(): void {
  }

  returnButton(): void {
    this.router.navigateByUrl('/consent_form');
  }

  continueButton(): void {
    this.consentService.consentGiven = false;
    this.router.navigateByUrl('/startinstructions');
  }

}
