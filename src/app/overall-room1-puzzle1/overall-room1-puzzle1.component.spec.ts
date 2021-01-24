import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRoom1Puzzle1Component } from './overall-room1-puzzle1.component';

describe('OverallRoom1Puzzle1Component', () => {
  let component: OverallRoom1Puzzle1Component;
  let fixture: ComponentFixture<OverallRoom1Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallRoom1Puzzle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRoom1Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
