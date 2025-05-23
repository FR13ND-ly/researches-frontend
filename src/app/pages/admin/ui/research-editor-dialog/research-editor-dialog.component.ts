import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/utils/material.module';

@Component({
  selector: 'app-research-editor-dialog',
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './research-editor-dialog.component.html',
  styleUrl: './research-editor-dialog.component.scss'
})
export class ResearchEditorDialogComponent implements OnInit {
  research  = inject(MAT_DIALOG_DATA)
  dialog = inject(MatDialogRef)
  fb = new FormBuilder()

  researchForm = this.fb.group({
    title: [this.research.title],
    authors: [this.research.editors],
    description: [this.research.description],
    keywords: [this.research.tags]
  })

  ngOnInit(): void {
    this.researchForm.patchValue(this.research)
  }

  onSubmit() {
    if (this.researchForm.invalid) return
    this.dialog.close(this.researchForm.value)
  }
}
