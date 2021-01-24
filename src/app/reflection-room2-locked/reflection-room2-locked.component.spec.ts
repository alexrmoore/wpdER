import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom2LockedComponent } from './reflection-room2-locked.component';

describe('ReflectionRoom2LockedComponent', () => {
  let component: ReflectionRoom2LockedComponent;
  let fixture: ComponentFixture<ReflectionRoom2LockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom2LockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom2LockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
