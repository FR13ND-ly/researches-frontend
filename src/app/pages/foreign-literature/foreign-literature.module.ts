import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForeignLiteratureComponent } from './foreign-literature.component';
import { LandingPageComponent } from './feature/landing-page/landing-page.component';
import { IssuesWrapperComponent } from '../../core/components/issues-wrapper/issues-wrapper.component';
import { IssueDetailsComponent } from '../../core/components/issue-details/issue-details.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ForeignLiteratureComponent,
        children: [
          {
            path: '',
            component: LandingPageComponent
          },
          {
            path: 'current-issue',
            component: IssueDetailsComponent,
            data: { category: 'foreign_literature' }
          },
          {
            path: 'archive',
            component: IssuesWrapperComponent,
            data: { category: 'foreign_literature' }
          },
          {
            path: 'issue/:id',
            component: IssueDetailsComponent
          }
        ]
      }
    ])
  ]
})
export class ForeignLiteratureModule { }
