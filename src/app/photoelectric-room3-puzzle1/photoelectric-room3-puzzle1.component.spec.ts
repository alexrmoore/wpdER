import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom3Puzzle1Component } from './photoelectric-room3-puzzle1.component';

describe('PhotoelectricRoom3Puzzle1Component', () => {
  let component: PhotoelectricRoom3Puzzle1Component;
  let fixture: ComponentFixture<PhotoelectricRoom3Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom3Puzzle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom3Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
