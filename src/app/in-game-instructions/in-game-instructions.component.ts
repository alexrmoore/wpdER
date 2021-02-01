import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TimersService } from '../timers.service';
import {RecentUrlService} from '../recent-url.service';

@Component({
  selector: 'app-in-game-instructions',
  templateUrl: './in-game-instructions.component.html',
  styleUrls: ['./in-game-instructions.component.css']
})
export class InGameInstructionsComponent implements OnInit {

  constructor(private router: Router,
              private timersService: TimersService,
              private recentUrlService: RecentUrlService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.timersService.startOverallTimer();
    // history.back();
    this.router.navigateByUrl(this.recentUrlService.prevURL);
  }

}
