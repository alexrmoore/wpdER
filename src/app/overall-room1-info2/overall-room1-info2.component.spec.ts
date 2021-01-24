import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRoom1Info2Component } from './overall-room1-info2.component';

describe('OverallRoom1Info2Component', () => {
  let component: OverallRoom1Info2Component;
  let fixture: ComponentFixture<OverallRoom1Info2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallRoom1Info2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRoom1Info2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
