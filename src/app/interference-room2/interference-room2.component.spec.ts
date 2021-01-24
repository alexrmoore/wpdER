import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom2Component } from './interference-room2.component';

describe('InterferenceRoom2Component', () => {
  let component: InterferenceRoom2Component;
  let fixture: ComponentFixture<InterferenceRoom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
