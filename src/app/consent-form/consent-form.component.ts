import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-consent-form',
  templateUrl: './consent-form.component.html',
  styleUrls: ['./consent-form.component.css']
})
export class ConsentFormComponent implements OnInit{
  consent1;
  consent2;
  consent3;
  consent4;
  consent5;
  decline1;
  decline2;
  decline3;
  decline4;
  decline5;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.consent1 = document.getElementById('consent1') as HTMLInputElement;
    this.consent2 = document.getElementById('consent2') as HTMLInputElement;
    this.consent3 = document.getElementById('consent3') as HTMLInputElement;
    this.consent4 = document.getElementById('consent4') as HTMLInputElement;
    this.consent5 = document.getElementById('consent5') as HTMLInputElement;
    this.decline1 = document.getElementById('decline1') as HTMLInputElement;
    this.decline2 = document.getElementById('decline2') as HTMLInputElement;
    this.decline3 = document.getElementById('decline3') as HTMLInputElement;
    this.decline4 = document.getElementById('decline4') as HTMLInputElement;
    this.decline5 = document.getElementById('decline5') as HTMLInputElement;
  }

  informationClick(): void {
    const pdfUrl = '../assets/InfoSheet.pdf';
    const pdfName = 'Participant Information Sheet - 02.12.20.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  submitClick(): void {
    if (this.consent1.checked && this.consent2.checked && this.consent3.checked && this.consent4.checked && this.consent5.checked) {
      this.router.navigateByUrl('/presurvey');
    } else {
      this.router.navigateByUrl('/consent_form_failed');
    }
  }

  checkboxChange(checkboxName, checkboxNumber): void {
    if (checkboxName === 'consent') {
      if (checkboxNumber === 1) {
        this.decline1.checked = false;
      }
      else if (checkboxNumber === 2) {
        this.decline2.checked = false;
      }
      else if (checkboxNumber === 3) {
        this.decline3.checked = false;
      }
      else if (checkboxNumber === 4) {
        this.decline4.checked = false;
      }
      else if (checkboxNumber === 5) {
        this.decline5.checked = false;
      }
    } else {
      if (checkboxNumber === 1) {
        this.consent1.checked = false;
      }
      else if (checkboxNumber === 2) {
        this.consent2.checked = false;
      }
      else if (checkboxNumber === 3) {
        this.consent3.checked = false;
      }
      else if (checkboxNumber === 4) {
        this.consent4.checked = false;
      }
      else if (checkboxNumber === 5) {
        this.consent5.checked = false;
      }
    }
  }

}
