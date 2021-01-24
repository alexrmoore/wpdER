import { TestBed } from '@angular/core/testing';

import { HintSelectionService } from './hint-selection.service';

describe('HintSelectionService', () => {
  let service: HintSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HintSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
