import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRoom1Info1Component } from './overall-room1-info1.component';

describe('OverallRoom1Info1Component', () => {
  let component: OverallRoom1Info1Component;
  let fixture: ComponentFixture<OverallRoom1Info1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallRoom1Info1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRoom1Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
