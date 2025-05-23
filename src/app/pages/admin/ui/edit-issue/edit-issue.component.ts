import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../core/utils/material.module';

@Component({
  selector: 'edit-issue',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './edit-issue.component.html',
  styleUrl: './edit-issue.component.scss'
})
export class EditIssueComponent implements OnInit {
  @Input() issue!: any
  @Output() save = new EventEmitter()
  fb = new FormBuilder()

  issueForm = this.fb.group({
    title: [''],
    category: [''],
    editors: [''],
    image: ['']
  })

  ngOnInit(): void {
    this.issueForm.patchValue(this.issue)
  }

  onSubmit() {
    if (this.issueForm.invalid) return
    this.save.emit(this.issueForm.value)
  }
}
