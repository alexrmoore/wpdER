import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom3LockedComponent } from './interference-room3-locked.component';

describe('InterferenceRoom3LockedComponent', () => {
  let component: InterferenceRoom3LockedComponent;
  let fixture: ComponentFixture<InterferenceRoom3LockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom3LockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom3LockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
