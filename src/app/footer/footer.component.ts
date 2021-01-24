import { Component, Inject, OnInit} from '@angular/core';
import { TimersService } from '../timers.service';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {GiveupModalComponent} from '../giveup-modal/giveup-modal.component';
import {HintModalComponent} from '../hint-modal/hint-modal.component';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  footerTimerRef;
  overallTimer: string;
  hideTimer: boolean;
  fullScreen = false;
  elem: any;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router,
              private timersService: TimersService,
              private anonymousIdentifierService: AnonymousIdentifierService,
              private lockedRoomsService: LockedRoomsService,
              private modalService: NgbModal,
              @Inject(DOCUMENT) private document: any) {
    this.footerTimerRef = setInterval(() => {
      this.overallTimer = this.timersService.finalTimeString;
      this.hideTimer = this.timersService.hideTimer;
    });
  }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;


  ngOnInit(): void {
    this.elem = document.documentElement;
  }

  onInstructionsClick(): void{
    this.router.navigateByUrl('/instructions');
    this.timersService.currentPauseTime = this.timersService.overallStopwatch;
    this.timersService.stopOverallTimer();
  }

  onHintClick(): void{
    const modalRefHint = this.modalService.open(HintModalComponent);
  }

  onGiveUpClick(): void{
    const modalRefGiveUp = this.modalService.open(GiveupModalComponent);
    modalRefGiveUp.componentInstance.name = 'World';
    }
/*
  onFullscreenClick(): void{
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
      }
    }

  openFullscreen(): void {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */ /*
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */ /*
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */ /*
      this.elem.msRequestFullscreen();
    }
  }

  closeFullscreen(): void {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */ /*
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */ /*
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */ /*
      this.document.msExitFullscreen();
    }
  }
*/
}

