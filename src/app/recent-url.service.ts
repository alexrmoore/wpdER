import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecentUrlService {
  giveUpUrl = '';
  prevURL = '';

  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.prevURL = router.url;
      }
    });
  }
}
