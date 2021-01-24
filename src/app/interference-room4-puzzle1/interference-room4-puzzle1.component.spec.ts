import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom4Puzzle1Component } from './interference-room4-puzzle1.component';

describe('InterferenceRoom4Puzzle1Component', () => {
  let component: InterferenceRoom4Puzzle1Component;
  let fixture: ComponentFixture<InterferenceRoom4Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom4Puzzle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom4Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
