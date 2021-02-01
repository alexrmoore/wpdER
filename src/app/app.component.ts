import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from './anonymous-identifier.service';
import { RouterModule, PreloadAllModules } from '@angular/router';


RouterModule.forRoot([
], {
  preloadingStrategy: PreloadAllModules
});


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EscapeRoom';


  constructor(private router: Router,
              private anonymousIdentifierService: AnonymousIdentifierService){
    this.anonymousIdentifierService.generateUUID();
/*
    this.router.navigateByUrl('/startinstructions');
    this.router.navigateByUrl('/instructions');
    this.router.navigateByUrl('/congratulations');
    this.router.navigateByUrl('/givenup');
    this.router.navigateByUrl('/info-screen');
    this.router.navigateByUrl('/reflection_room1');
    this.router.navigateByUrl('/reflection_room2');
    this.router.navigateByUrl('/reflection_room2_locked');
    this.router.navigateByUrl('/reflection_room3');
    this.router.navigateByUrl('/reflection_room4');
    this.router.navigateByUrl('reflection_room1_info1');
    this.router.navigateByUrl('reflection_room2_info1');
    this.router.navigateByUrl('reflection_room3_info1');
    this.router.navigateByUrl('reflection_room4_info1');
    this.router.navigateByUrl('reflection_room2_puzzle);1');
    this.router.navigateByUrl('reflection_room3_puzzle1');
    this.router.navigateByUrl('interference_room1');
    this.router.navigateByUrl('reflection_room4_puzzle1');
    this.router.navigateByUrl('interference_room2');
    this.router.navigateByUrl('interference_room3');
    this.router.navigateByUrl('interference_room3_locked');
    this.router.navigateByUrl('interference_room4');
    this.router.navigateByUrl('interference_room5');
    this.router.navigateByUrl('interference_room1_info1');
    this.router.navigateByUrl('interference_room2_info1');
    this.router.navigateByUrl('interference_room3_info1');
    this.router.navigateByUrl('interference_room4_info1');
    this.router.navigateByUrl('interference_room5_info1');
    this.router.navigateByUrl('interference_room3_puzzle1');
    this.router.navigateByUrl('interference_room4_puzzle1');
    this.router.navigateByUrl('photoelectric_room1');
    this.router.navigateByUrl('photoelectric_room2');
    this.router.navigateByUrl('photoelectric_room3');
    this.router.navigateByUrl('photoelectric_room3_locked');
    this.router.navigateByUrl('photoelectric_room4');
    this.router.navigateByUrl('photoelectric_room5');
    this.router.navigateByUrl('photoelectric_room1_info1');
    this.router.navigateByUrl('photoelectric_room2_info1');
    this.router.navigateByUrl('photoelectric_room3_info1');
    this.router.navigateByUrl('photoelectric_room4_info1');
    this.router.navigateByUrl('photoelectric_room3_puzzle1');
    this.router.navigateByUrl('photoelectric_room4_puzzle1');
    this.router.navigateByUrl('photoelectric_room5_info1');
    this.router.navigateByUrl('photoelectric_room5_info2');
    this.router.navigateByUrl('overall_room1');
    this.router.navigateByUrl('overall_room1_locked');
    this.router.navigateByUrl('overall_room1_info1');
    this.router.navigateByUrl('overall_room1_info2');
    this.router.navigateByUrl('overall_room1_puzzle1');
    this.router.navigateByUrl('complete_room');
    this.router.navigateByUrl('consent_form');
    this.router.navigateByUrl('consent_form_failed');
    this.router.navigateByUrl('presurvey');
    this.router.navigateByUrl('postsurvey'); */

    this.router.navigateByUrl('/title');
  }
}

