import { Component, OnInit, HostListener } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';

@Component({
  selector: 'app-pre-surveyscreen',
  templateUrl: './pre-surveyscreen.component.html',
  styleUrls: ['./pre-surveyscreen.component.css']
})
export class PreSurveyscreenComponent implements OnInit {
  hideButton = true;
  PreSurveyUrl = 'https://jpqkvwktd6k.typeform.com/to/We3yq7M9#anonymousid=';

  constructor(private router: Router, private anonymousIdentifierService: AnonymousIdentifierService) {
    this.PreSurveyUrl = this.PreSurveyUrl.concat(anonymousIdentifierService.anonymousCode);
  }

  ngOnInit(): void {
    const container = document.getElementById('container');
    const widgetNode = document.getElementById('surveywidget');
    const newWidget = document.createElement('div');
    typeformEmbed.makeWidget(newWidget, this.PreSurveyUrl, {
      hideFooter: false,
      hideHeaders: true,
      onSubmit(event): void {
        newWidget.style.zIndex = '40';
      }
    });
    newWidget.style.zIndex = '50';
    newWidget.style.position = 'absolute';
    newWidget.style.width = '800px';
    newWidget.style.height = '550px';
    container.insertBefore(newWidget, widgetNode);
    setTimeout(() => { this.hideButton = false; }, 5000);
  }

  instructionsNavigation(): void {
    this.router.navigateByUrl('/startinstructions');
  }
}
