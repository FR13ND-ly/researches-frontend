import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../core/utils/material.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-research-section-dialog',
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './add-research-section-dialog.component.html',
  styleUrl: './add-research-section-dialog.component.scss'
})
export class AddResearchSectionDialogComponent {
  dialogRef = inject(MatDialogRef)
  
  fb = new FormBuilder()

  researchSectionForm = this.fb.group({
    title: ['']
  })

  onSubmit() {
    this.dialogRef.close(this.researchSectionForm.value)
  }
}
