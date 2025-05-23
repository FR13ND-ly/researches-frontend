import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../../core/utils/material.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IssuesService } from '../../../../core/services/issues.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-issue-dialog',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-issue-dialog.component.html',
  styleUrl: './add-issue-dialog.component.scss'
})
export class AddIssueDialogComponent {
  issueService = inject(IssuesService)
  dialogRef = inject(MatDialogRef)

  fb = new FormBuilder()


  issueForm = this.fb.group({
    title: [''],
    category: [''],
    editors: [''],
    image: ['']
  })

  onSubmit() {
    if (this.issueForm.invalid) return
    this.issueService.create(this.issueForm.value).subscribe(() => {
      this.dialogRef.close()
    })
  }
}
