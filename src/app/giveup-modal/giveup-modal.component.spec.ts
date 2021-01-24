import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveupModalComponent } from './giveup-modal.component';

describe('GiveupModalComponent', () => {
  let component: GiveupModalComponent;
  let fixture: ComponentFixture<GiveupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
