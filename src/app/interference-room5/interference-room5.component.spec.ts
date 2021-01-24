import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom5Component } from './interference-room5.component';

describe('InterferenceRoom5Component', () => {
  let component: InterferenceRoom5Component;
  let fixture: ComponentFixture<InterferenceRoom5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
