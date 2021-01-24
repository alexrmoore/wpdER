import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom3Puzzle1Component } from './interference-room3-puzzle1.component';

describe('InterferenceRoom3Puzzle1Component', () => {
  let component: InterferenceRoom3Puzzle1Component;
  let fixture: ComponentFixture<InterferenceRoom3Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom3Puzzle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom3Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
