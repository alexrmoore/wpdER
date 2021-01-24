import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionRoom4Component } from './reflection-room4.component';

describe('ReflectionRoom4Component', () => {
  let component: ReflectionRoom4Component;
  let fixture: ComponentFixture<ReflectionRoom4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionRoom4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionRoom4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
