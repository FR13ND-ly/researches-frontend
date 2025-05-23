import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinguisticComponent } from './linguistic.component';
import { LandingPageComponent } from './feature/landing-page/landing-page.component';
import { IssuesWrapperComponent } from '../../core/components/issues-wrapper/issues-wrapper.component';
import { IssueDetailsComponent } from '../../core/components/issue-details/issue-details.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LinguisticComponent,
        children: [
          {
            path: '',
            component: LandingPageComponent
          },
          {
            path: 'current-issue',
            component: IssueDetailsComponent,
            data: { category: 'linguistic' }
          },
          {
            path: 'archive',
            component: IssuesWrapperComponent,
            data: { category: 'linguistic' }
          },
          {
            path: 'issue/:id',
            component: IssueDetailsComponent
          }
        ]
      }
    ]),
  ],
})
export class LinguisticModule {}
