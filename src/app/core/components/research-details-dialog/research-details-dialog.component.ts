import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-research-details-dialog',
  imports: [],
  templateUrl: './research-details-dialog.component.html',
  styleUrl: './research-details-dialog.component.scss'
})
export class ResearchDetailsDialogComponent {
  research = inject(MAT_DIALOG_DATA)

  
}
