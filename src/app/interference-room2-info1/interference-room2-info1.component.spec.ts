import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom2Info1Component } from './interference-room2-info1.component';

describe('InterferenceRoom2Info1Component', () => {
  let component: InterferenceRoom2Info1Component;
  let fixture: ComponentFixture<InterferenceRoom2Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom2Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom2Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
