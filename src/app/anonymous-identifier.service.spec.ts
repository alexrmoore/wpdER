import { TestBed } from '@angular/core/testing';

import { AnonymousIdentifierService } from './anonymous-identifier.service';

describe('AnonymousIdentifierService', () => {
  let service: AnonymousIdentifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnonymousIdentifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
