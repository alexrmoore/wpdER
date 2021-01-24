import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom2Component } from './reflection-room2.component';

describe('ReflectionRoom2Component', () => {
  let component: ReflectionRoom2Component;
  let fixture: ComponentFixture<ReflectionRoom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
