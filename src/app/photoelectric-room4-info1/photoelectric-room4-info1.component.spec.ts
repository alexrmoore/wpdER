import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom4Info1Component } from './photoelectric-room4-info1.component';

describe('PhotoelectricRoom4Info1Component', () => {
  let component: PhotoelectricRoom4Info1Component;
  let fixture: ComponentFixture<PhotoelectricRoom4Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom4Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom4Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
