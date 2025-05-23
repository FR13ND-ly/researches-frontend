import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../core/utils/material.module';

@Component({
  selector: 'issue-item',
  imports: [MaterialModule, DatePipe, RouterLink],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.scss'
})
export class IssueItemComponent {
  @Input() issue: any;
  @Output() delete = new EventEmitter()

  onDelete() {
    this.delete.emit()
  }
}
