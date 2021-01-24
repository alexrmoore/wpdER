import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom3Component } from './interference-room3.component';

describe('InterferenceRoom3Component', () => {
  let component: InterferenceRoom3Component;
  let fixture: ComponentFixture<InterferenceRoom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
