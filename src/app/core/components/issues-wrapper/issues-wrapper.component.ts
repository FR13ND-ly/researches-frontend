import { Component, inject, OnInit } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { map, Observable } from 'rxjs';
import { IssueItemComponent } from '../issue-item/issue-item.component';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issues-wrapper',
  imports: [IssueItemComponent, AsyncPipe],
  templateUrl: './issues-wrapper.component.html',
  styleUrl: './issues-wrapper.component.scss'
})
export class IssuesWrapperComponent {
  issuesService = inject(IssuesService)
  route = inject(ActivatedRoute)

  issues$: Observable<any> = this.issuesService.getByCategory(this.route.snapshot.data['category']).pipe(map((res: any) => res.issues))
}
