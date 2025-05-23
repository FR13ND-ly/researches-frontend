import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../../core/utils/material.module';
import { AsyncPipe, NgIf } from '@angular/common';
import { UsersService } from '../../../../core/services/users.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../../ui/add-user-dialog/add-user-dialog.component';
import { UpdatePasswordDialogComponent } from '../../ui/update-password-dialog/update-password-dialog.component';
import { UpdateUserDialogComponent } from '../../ui/update-user-dialog/update-user-dialog.component';

@Component({
    selector: 'app-users',
    imports: [MaterialModule, AsyncPipe],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss',
})
export class UsersComponent {
    usersService = inject(UsersService);
    dialog = inject(MatDialog);

    users$: Observable<any> = this.usersService.getAll();

    onAddUser(users: any) {
        let d = this.dialog.open(AddUserDialogComponent);
        d.afterClosed().subscribe(data => {
            this.usersService.create(data).subscribe((res: any) => {
                users.push(res.user);
            });
        })
    }

    onEditUser(index: any, users: any) {
        let user = users[index];
        let d = this.dialog.open(UpdateUserDialogComponent, {
            data: user
        })
        d.afterClosed().subscribe(data => {
            this.usersService.update(user._id, data).subscribe((res: any) => {
                users[index] = res.user
            })
        })
    }

    onChangePassword(user: any) {
        let d = this.dialog.open(UpdatePasswordDialogComponent, {
            data: user
        })
        d.afterClosed().subscribe(data => {
            this.usersService.update(user._id, data).subscribe((res: any) => {
                user = res.user
            })
        })
    }


    onDelete(index: any, users: any) {
        if (!window.confirm('Esti sigur ca vrei sa stergi acest utilizator?')) {
            return;
        }
        this.usersService.delete(users[index]._id).subscribe(() => {
            users.splice(index, 1);
        })
    }
}
