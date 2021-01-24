import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom5Info1Component } from './interference-room5-info1.component';

describe('InterferenceRoom5Info1Component', () => {
  let component: InterferenceRoom5Info1Component;
  let fixture: ComponentFixture<InterferenceRoom5Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom5Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom5Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
