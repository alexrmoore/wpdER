import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom5Component } from './photoelectric-room5.component';

describe('PhotoelectricRoom5Component', () => {
  let component: PhotoelectricRoom5Component;
  let fixture: ComponentFixture<PhotoelectricRoom5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
