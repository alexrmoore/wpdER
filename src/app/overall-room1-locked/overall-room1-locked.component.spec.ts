import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRoom1LockedComponent } from './overall-room1-locked.component';

describe('OverallRoom1LockedComponent', () => {
  let component: OverallRoom1LockedComponent;
  let fixture: ComponentFixture<OverallRoom1LockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallRoom1LockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRoom1LockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
