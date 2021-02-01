import { TestBed } from '@angular/core/testing';

import { BackListenerService } from './back-listener.service';

describe('BackListenerService', () => {
  let service: BackListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
