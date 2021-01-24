import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlescreenComponent } from './titlescreen.component';

describe('TitlescreenComponent', () => {
  let component: TitlescreenComponent;
  let fixture: ComponentFixture<TitlescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
