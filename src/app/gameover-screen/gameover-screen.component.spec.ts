import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameoverScreenComponent } from './gameover-screen.component';

describe('GameoverScreenComponent', () => {
  let component: GameoverScreenComponent;
  let fixture: ComponentFixture<GameoverScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameoverScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameoverScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
