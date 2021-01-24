import { TestBed } from '@angular/core/testing';

import { RecentUrlService } from './recent-url.service';

describe('RecentUrlService', () => {
  let service: RecentUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
