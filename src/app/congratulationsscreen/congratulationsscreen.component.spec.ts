import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationsscreenComponent } from './congratulationsscreen.component';

describe('CongratulationsscreenComponent', () => {
  let component: CongratulationsscreenComponent;
  let fixture: ComponentFixture<CongratulationsscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratulationsscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratulationsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
