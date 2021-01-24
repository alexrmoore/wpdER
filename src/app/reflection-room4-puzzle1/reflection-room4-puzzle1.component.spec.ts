import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom4Puzzle1Component } from './reflection-room4-puzzle1.component';

describe('ReflectionRoom4Puzzle1Component', () => {
  let component: ReflectionRoom4Puzzle1Component;
  let fixture: ComponentFixture<ReflectionRoom4Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom4Puzzle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom4Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
