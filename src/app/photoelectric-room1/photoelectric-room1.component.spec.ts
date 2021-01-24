import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom1Component } from './photoelectric-room1.component';

describe('PhotoelectricRoom1Component', () => {
  let component: PhotoelectricRoom1Component;
  let fixture: ComponentFixture<PhotoelectricRoom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
