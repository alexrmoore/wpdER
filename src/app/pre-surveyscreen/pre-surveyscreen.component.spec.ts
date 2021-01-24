import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSurveyscreenComponent } from './pre-surveyscreen.component';

describe('PreSurveyscreenComponent', () => {
  let component: PreSurveyscreenComponent;
  let fixture: ComponentFixture<PreSurveyscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreSurveyscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSurveyscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
