import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';

/*
declare var require: any;
const FileSaver = require('file-saver'); */

@Component({
  selector: 'app-info-screen',
  templateUrl: './info-screen.component.html',
  styleUrls: ['./info-screen.component.css']
})
export class InfoScreenComponent {

  constructor(private router: Router,
              private anonymousIdentifierService: AnonymousIdentifierService) { }
  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  continueClick(): void {
    this.router.navigateByUrl('/consent_form');
  }

  infoClick(): void {
    /*
    const pdfUrl = '../assets/InfoSheet.pdf';
    const pdfName = 'PhysicsEscapeRoom_InformationSheet_25.01.21.pdf';
    FileSaver.saveAs(pdfUrl, pdfName); */
    window.open('https://drive.google.com/file/d/1FjagqXnUCjIib09QBfsfPWuE1yg6gh6L/view?usp=sharing', '_blank');
  }

}
