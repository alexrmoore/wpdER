import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintModalComponent } from './hint-modal.component';

describe('HintModalComponent', () => {
  let component: HintModalComponent;
  let fixture: ComponentFixture<HintModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HintModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
