import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom3Info1Component } from './photoelectric-room3-info1.component';

describe('PhotoelectricRoom3Info1Component', () => {
  let component: PhotoelectricRoom3Info1Component;
  let fixture: ComponentFixture<PhotoelectricRoom3Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom3Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom3Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
