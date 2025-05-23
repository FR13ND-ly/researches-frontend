import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { userActions } from '../../../../state/user/user.actions';
import { MaterialModule } from '../../../../core/utils/material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { selectUser } from '../../../../state/user/user.reducer';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
    selector: 'admin-sidebar',
    imports: [MaterialModule, RouterLink, RouterLinkActive, AsyncPipe],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    standalone: true
})
export class SidebarComponent {
  store = inject(Store);

  user$ = this.store.select(selectUser).pipe(map((user: any) => user?.user));

  logout() {
    this.store.dispatch(userActions.logout());
  }
}
