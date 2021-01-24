import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom4Component } from './photoelectric-room4.component';

describe('PhotoelectricRoom4Component', () => {
  let component: PhotoelectricRoom4Component;
  let fixture: ComponentFixture<PhotoelectricRoom4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
