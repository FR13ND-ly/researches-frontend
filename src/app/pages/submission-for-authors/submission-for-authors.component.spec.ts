import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionForAuthorsComponent } from './submission-for-authors.component';

describe('SubmissionForAuthorsComponent', () => {
  let component: SubmissionForAuthorsComponent;
  let fixture: ComponentFixture<SubmissionForAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionForAuthorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionForAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
