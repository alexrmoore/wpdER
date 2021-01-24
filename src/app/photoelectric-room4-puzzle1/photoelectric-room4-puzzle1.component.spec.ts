import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom4Puzzle1Component } from './photoelectric-room4-puzzle1.component';

describe('PhotoelectricRoom4Puzzle1Component', () => {
  let component: PhotoelectricRoom4Puzzle1Component;
  let fixture: ComponentFixture<PhotoelectricRoom4Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom4Puzzle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom4Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
