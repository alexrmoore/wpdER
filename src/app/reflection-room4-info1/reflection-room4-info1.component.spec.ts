import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom4Info1Component } from './reflection-room4-info1.component';

describe('ReflectionRoom4Info1Component', () => {
  let component: ReflectionRoom4Info1Component;
  let fixture: ComponentFixture<ReflectionRoom4Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom4Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom4Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
