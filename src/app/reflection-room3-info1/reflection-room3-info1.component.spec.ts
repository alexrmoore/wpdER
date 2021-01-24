import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom3Info1Component } from './reflection-room3-info1.component';

describe('ReflectionRoom3Info1Component', () => {
  let component: ReflectionRoom3Info1Component;
  let fixture: ComponentFixture<ReflectionRoom3Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom3Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom3Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
