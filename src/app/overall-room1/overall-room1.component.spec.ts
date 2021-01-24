import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRoom1Component } from './overall-room1.component';

describe('OverallRoom1Component', () => {
  let component: OverallRoom1Component;
  let fixture: ComponentFixture<OverallRoom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallRoom1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRoom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
