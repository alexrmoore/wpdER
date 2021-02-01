import { Injectable, HostListener} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackListenerService {

constructor(router: Router) {
  router.events
    .subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate') {
        router.navigateByUrl('/title');
        window.location.reload();
      }
    });
  }
}

