import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom4Info1Component } from './interference-room4-info1.component';

describe('InterferenceRoom4Info1Component', () => {
  let component: InterferenceRoom4Info1Component;
  let fixture: ComponentFixture<InterferenceRoom4Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom4Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom4Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
