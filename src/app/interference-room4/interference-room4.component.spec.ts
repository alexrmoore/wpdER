import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceRoom4Component } from './interference-room4.component';

describe('InterferenceRoom4Component', () => {
  let component: InterferenceRoom4Component;
  let fixture: ComponentFixture<InterferenceRoom4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterferenceRoom4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterferenceRoom4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
