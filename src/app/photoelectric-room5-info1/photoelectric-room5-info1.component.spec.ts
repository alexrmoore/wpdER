import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom5Info1Component } from './photoelectric-room5-info1.component';

describe('PhotoelectricRoom5Info1Component', () => {
  let component: PhotoelectricRoom5Info1Component;
  let fixture: ComponentFixture<PhotoelectricRoom5Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom5Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom5Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
