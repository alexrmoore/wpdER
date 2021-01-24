import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom3Info1Component } from './interference-room3-info1.component';

describe('InterferenceRoom3Info1Component', () => {
  let component: InterferenceRoom3Info1Component;
  let fixture: ComponentFixture<InterferenceRoom3Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom3Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom3Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
