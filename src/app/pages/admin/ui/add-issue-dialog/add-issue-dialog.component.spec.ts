import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIssueDialogComponent } from './add-issue-dialog.component';

describe('AddIssueDialogComponent', () => {
  let component: AddIssueDialogComponent;
  let fixture: ComponentFixture<AddIssueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIssueDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIssueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
