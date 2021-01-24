import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom3Component } from './photoelectric-room3.component';

describe('PhotoelectricRoom3Component', () => {
  let component: PhotoelectricRoom3Component;
  let fixture: ComponentFixture<PhotoelectricRoom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
