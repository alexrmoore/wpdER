import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSurveyscreenComponent } from './post-surveyscreen.component';

describe('PostSurveyscreenComponent', () => {
  let component: PostSurveyscreenComponent;
  let fixture: ComponentFixture<PostSurveyscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSurveyscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSurveyscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
