import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom1Info1Component } from './interference-room1-info1.component';

describe('InterferenceRoom1Info1Component', () => {
  let component: InterferenceRoom1Info1Component;
  let fixture: ComponentFixture<InterferenceRoom1Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom1Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom1Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
