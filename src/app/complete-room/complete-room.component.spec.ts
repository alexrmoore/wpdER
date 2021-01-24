import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRoomComponent } from './complete-room.component';

describe('CompleteRoomComponent', () => {
  let component: CompleteRoomComponent;
  let fixture: ComponentFixture<CompleteRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
