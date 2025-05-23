import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../../core/utils/material.module';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { IssuesService } from '../../../../core/services/issues.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap, shareReplay } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddResearchSectionDialogComponent } from '../../ui/add-research-section-dialog/add-research-section-dialog.component';
import { groupBy } from '../../../../core/utils/groupBy';
import { ResearchesService } from '../../../../core/services/researches.service';
import { ResearchesSectionComponent } from '../../ui/researches-section/researches-section.component';
import { SectionsService } from '../../../../core/services/sections.service';
import { EditIssueComponent } from '../../ui/edit-issue/edit-issue.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-issue',
    imports: [MaterialModule, AsyncPipe, EditIssueComponent, DatePipe, ResearchesSectionComponent],
    templateUrl: './issue.component.html',
    styleUrl: './issue.component.scss',
    standalone: true
})
export class IssueComponent {
    issuesService = inject(IssuesService)
    researchesService = inject(ResearchesService)
    sectionsService = inject(SectionsService)

    route = inject(ActivatedRoute)
    dialog = inject(MatDialog)

    issue$: Observable<any> = this.issuesService.getById(this.route.snapshot.params['id']).pipe(
        map((issue: any) => ({
            ...issue,
            allSectionIds: issue.sections.map((section: any) => `section-${section._id}`)
        })),
        shareReplay(1)
    )
    
    onAddSection(issue: any) {
        let d = this.dialog.open(AddResearchSectionDialogComponent)
        d.afterClosed().subscribe(res=> {
            if (!res) return;
            
            let data = {
                title: res.title,
                id: this.route.snapshot.params['id']
            }
            this.sectionsService.create(data).subscribe(() => {
                this.refreshIssue();
            });
        })
    }

    private refreshIssue() {
        this.issue$ = this.issuesService.getById(this.route.snapshot.params['id']).pipe(
            map((issue: any) => ({
                ...issue,
                allSectionIds: issue.sections.map((section: any) => `section-${section._id}`)
            })),
            shareReplay(1)
        );
    }

    onResearchDropped(event: CdkDragDrop<any[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }

        this.updateResearchPositions(event);
    }

    private updateResearchPositions(event: CdkDragDrop<any[]>) {
        const movedResearch = event.container.data[event.currentIndex];
        
        const targetSectionId = event.container.id.replace('section-', '');
        
        if (event.previousContainer !== event.container) {
            let data = {
                newIndex: event.currentIndex,
                    newSection: targetSectionId
            }
            this.researchesService.reorder(movedResearch._id, data).subscribe(console.log)
        }
        else {
            let data = {
                newIndex: event.currentIndex
            }
            this.researchesService.reorder(movedResearch._id, data).subscribe((res) => {
                console.log(res)
            })
        }
    }

    onDeleteSection(index: any, sections: any) {
        this.sectionsService.delete(sections[index]._id).subscribe(() => {
            sections.splice(index, 1)
            this.refreshIssue();
        })
    }
}