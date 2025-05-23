import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../../core/utils/material.module';
import { IssuesService } from '../../../../core/services/issues.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { IssueItemComponent } from '../../ui/issue-item/issue-item.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddIssueDialogComponent } from '../../ui/add-issue-dialog/add-issue-dialog.component';

@Component({
    selector: 'app-issues',
    imports: [MaterialModule, AsyncPipe, IssueItemComponent],
    templateUrl: './issues.component.html',
    styleUrl: './issues.component.scss',
    standalone: true
})
export class IssuesComponent {
    issuesService = inject(IssuesService)
    dialog = inject(MatDialog)

    linguistic$: Observable<any> = this.issuesService.getByCategory('linguistic');
    literature$: Observable<any> = this.issuesService.getByCategory('literature');
    foreighLanguages$: Observable<any> = this.issuesService.getByCategory('foreign_literature');

    onAddIssue() {
        let d = this.dialog.open(AddIssueDialogComponent);
        d.afterClosed().subscribe(data => {
            location.reload()
        })
    }
}
