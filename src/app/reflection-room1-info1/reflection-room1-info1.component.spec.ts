import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom1Info1Component } from './reflection-room1-info1.component';

describe('ReflectionRoom1Info1Component', () => {
  let component: ReflectionRoom1Info1Component;
  let fixture: ComponentFixture<ReflectionRoom1Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom1Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom1Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
