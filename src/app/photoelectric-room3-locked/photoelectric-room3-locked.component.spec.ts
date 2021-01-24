import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoelectricRoom3LockedComponent } from './photoelectric-room3-locked.component';

describe('PhotoelectricRoom3LockedComponent', () => {
  let component: PhotoelectricRoom3LockedComponent;
  let fixture: ComponentFixture<PhotoelectricRoom3LockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoelectricRoom3LockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoelectricRoom3LockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
