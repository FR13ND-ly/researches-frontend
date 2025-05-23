import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { IssueComponent } from './feature/issue/issue.component';
import { IssuesComponent } from './feature/issues/issues.component';
import { UsersComponent } from './feature/users/users.component';
import { LoginComponent } from './feature/login/login.component';
import { authGuard } from '../../core/guards/auth.guard';
import { adminGuard } from '../../core/guards/admin.guard';
import { logoutGuard } from '../../core/guards/logout.guard';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'issues',
            pathMatch: 'full'
          },
          {
            path: 'issues',
            component: IssuesComponent
          },
          {
            path: 'issues/:id',
            component: IssueComponent
          },
          {
            path: 'users',
            component: UsersComponent,
            canActivate: [adminGuard]
          }
        ],
        canActivate: [authGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [logoutGuard]
      },
    ]),
  ],
})
export class AdminModule {}
