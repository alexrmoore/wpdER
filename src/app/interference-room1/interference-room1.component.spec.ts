import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom1Component } from './interference-room1.component';

describe('InterferenceRoom1Component', () => {
  let component: InterferenceRoom1Component;
  let fixture: ComponentFixture<InterferenceRoom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
