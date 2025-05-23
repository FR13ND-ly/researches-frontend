import { Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ResearchItemComponent } from '../research-item/research-item.component';

@Component({
  selector: 'app-issue-details',
  imports: [AsyncPipe, DatePipe, ResearchItemComponent],
  templateUrl: './issue-details.component.html',
  styleUrl: './issue-details.component.scss'
})
export class IssueDetailsComponent {
  issuesService = inject(IssuesService)
  route = inject(ActivatedRoute)

  issue$: Observable<any> = this.route.params.pipe(
    map((params) => {
      let id = params['id'];
      if (!id) {
        id = "~" + this.route.snapshot.data['category'].replace('-', "_");
      }
      console.log('id', id)
      return id
    }),
    switchMap((id) => {
      return this.issuesService.getById(id)
    })
  )
}
