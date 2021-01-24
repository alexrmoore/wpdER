import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom2Info1Component } from './photoelectric-room2-info1.component';

describe('PhotoelectricRoom2Info1Component', () => {
  let component: PhotoelectricRoom2Info1Component;
  let fixture: ComponentFixture<PhotoelectricRoom2Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom2Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom2Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
