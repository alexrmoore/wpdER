import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom2Puzzle1Component } from './reflection-room2-puzzle1.component';

describe('ReflectionRoom2Puzzle1Component', () => {
  let component: ReflectionRoom2Puzzle1Component;
  let fixture: ComponentFixture<ReflectionRoom2Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom2Puzzle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom2Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
