import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentFormFailedComponent } from './consent-form-failed.component';

describe('ConsentFormFailedComponent', () => {
  let component: ConsentFormFailedComponent;
  let fixture: ComponentFixture<ConsentFormFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentFormFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentFormFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
