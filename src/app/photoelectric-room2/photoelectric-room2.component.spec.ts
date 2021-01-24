import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom2Component } from './photoelectric-room2.component';

describe('PhotoelectricRoom2Component', () => {
  let component: PhotoelectricRoom2Component;
  let fixture: ComponentFixture<PhotoelectricRoom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
