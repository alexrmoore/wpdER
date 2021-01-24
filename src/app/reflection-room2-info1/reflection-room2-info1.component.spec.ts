import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom2Info1Component } from './reflection-room2-info1.component';

describe('ReflectionRoom2Info1Component', () => {
  let component: ReflectionRoom2Info1Component;
  let fixture: ComponentFixture<ReflectionRoom2Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom2Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom2Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
