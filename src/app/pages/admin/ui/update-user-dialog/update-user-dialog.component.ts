import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/utils/material.module';

@Component({
    selector: 'app-update-user-dialog',
    imports: [ReactiveFormsModule, MaterialModule],
    templateUrl: './update-user-dialog.component.html',
    styleUrl: './update-user-dialog.component.scss',
    standalone: true
})
export class UpdateUserDialogComponent {
    user: any = inject(MAT_DIALOG_DATA);
    dialogRef = inject(MatDialogRef)
    fb = new FormBuilder()

    userForm = this.fb.group({
        username: [this.user.username],
        email: [this.user.email],
    })

    onSubmit() {
        if (this.userForm.invalid) return
        this.dialogRef.close(this.userForm.value)
    }
}
