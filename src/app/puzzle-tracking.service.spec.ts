import { TestBed } from '@angular/core/testing';

import { PuzzleTrackingService } from './puzzle-tracking.service';

describe('PuzzleTrackingService', () => {
  let service: PuzzleTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuzzleTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
