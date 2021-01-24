import { TestBed } from '@angular/core/testing';

import { LockedRoomsService } from './locked-rooms.service';

describe('LockedRoomsService', () => {
  let service: LockedRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockedRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
