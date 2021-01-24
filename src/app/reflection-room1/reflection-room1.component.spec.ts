import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom1Component } from './reflection-room1.component';

describe('ReflectionRoom1Component', () => {
  let component: ReflectionRoom1Component;
  let fixture: ComponentFixture<ReflectionRoom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
