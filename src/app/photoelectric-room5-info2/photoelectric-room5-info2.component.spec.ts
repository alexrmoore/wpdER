import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom5Info2Component } from './photoelectric-room5-info2.component';

describe('PhotoelectricRoom5Info2Component', () => {
  let component: PhotoelectricRoom5Info2Component;
  let fixture: ComponentFixture<PhotoelectricRoom5Info2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom5Info2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom5Info2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
