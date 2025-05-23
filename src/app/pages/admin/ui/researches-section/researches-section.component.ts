import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../../core/utils/material.module';
import { ResearchesService } from '../../../../core/services/researches.service';
import { MatDialog } from '@angular/material/dialog';
import { ResearchEditorDialogComponent } from '../research-editor-dialog/research-editor-dialog.component';
import { JsonPipe } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'researches-section',
  imports: [MaterialModule, CdkDropList, CdkDrag, CdkDragHandle],
  templateUrl: './researches-section.component.html',
  styleUrl: './researches-section.component.scss'
})
export class ResearchesSectionComponent {
  @Input() section: any;
  @Input() allSectionIds: string[] = [];
  @Output() researchDropped = new EventEmitter<CdkDragDrop<any[]>>();
  @Output() deleteSection = new EventEmitter<void>();
  
  researchesService = inject(ResearchesService)
  dialog = inject(MatDialog)

  onAddResearch() {
    let d = this.dialog.open(ResearchEditorDialogComponent, {
      data: {}
    })
    d.afterClosed().subscribe(res => {
      if (!res) return; 
      
      let data = {
        ...res,
        section: this.section._id
      }
      this.researchesService.create(data).subscribe((res: any) => {
        this.section.researches.push(res.research)
      })
    })
  }

  onEdit(index: number) {
    let d = this.dialog.open(ResearchEditorDialogComponent, {
      data: this.section.researches[index]
    })
    d.afterClosed().subscribe(res => {
      if (!res) return;
      
      let data = {
        ...res,
      }
      this.researchesService.update(this.section.researches[index]._id, data).subscribe((res: any) => {
        this.section.researches[index] = res.research
      })
    })
  }

  onDelete(index: number) {
    if (!confirm('Esti sigur?')) return
    this.researchesService.delete(this.section.researches[index]._id).subscribe(() => {
      this.section.researches.splice(index, 1)
    })
  }

  getDropListId(): string {
    return `section-${this.section._id}`;
  }

  getConnectedListIds(): string[] {
    return this.allSectionIds.filter(id => id !== this.getDropListId());
  }

  onDrop(event: CdkDragDrop<any[]>) {
    this.researchDropped.emit(event);
  }

  onDeleteSection() {
    if (!confirm('Esti sigur?')) return
    this.deleteSection.emit();
  }

}