import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResearchDetailsDialogComponent } from '../research-details-dialog/research-details-dialog.component';

@Component({
  selector: 'research-item',
  imports: [],
  templateUrl: './research-item.component.html',
  styleUrl: './research-item.component.scss'
})
export class ResearchItemComponent {
  research: any = input()

  dialog = inject(MatDialog)

  onOpenDetails() {
    this.dialog.open(ResearchDetailsDialogComponent, { data: this.research })
  }
}
