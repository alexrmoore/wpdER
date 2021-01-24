import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom1Info1Component } from './photoelectric-room1-info1.component';

describe('PhotoelectricRoom1Info1Component', () => {
  let component: PhotoelectricRoom1Info1Component;
  let fixture: ComponentFixture<PhotoelectricRoom1Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom1Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom1Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
