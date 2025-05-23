import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionForReviewersComponent } from './submission-for-reviewers.component';

describe('SubmissionForReviewersComponent', () => {
  let component: SubmissionForReviewersComponent;
  let fixture: ComponentFixture<SubmissionForReviewersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionForReviewersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionForReviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
