import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom3Component } from './reflection-room3.component';

describe('ReflectionRoom3Component', () => {
  let component: ReflectionRoom3Component;
  let fixture: ComponentFixture<ReflectionRoom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
