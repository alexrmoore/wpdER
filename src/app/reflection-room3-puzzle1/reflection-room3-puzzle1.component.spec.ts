import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom3Puzzle1Component } from './reflection-room3-puzzle1.component';

describe('ReflectionRoom3Puzzle1Component', () => {
  let component: ReflectionRoom3Puzzle1Component;
  let fixture: ComponentFixture<ReflectionRoom3Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom3Puzzle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom3Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
