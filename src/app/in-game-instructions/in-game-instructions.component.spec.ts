import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InGameInstructionsComponent } from './in-game-instructions.component';

describe('InGameInstructionsComponent', () => {
  let component: InGameInstructionsComponent;
  let fixture: ComponentFixture<InGameInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InGameInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InGameInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
