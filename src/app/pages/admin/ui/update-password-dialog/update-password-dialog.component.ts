import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/utils/material.module';

@Component({
    selector: 'app-update-password-dialog',
    imports: [ReactiveFormsModule, MaterialModule],
    templateUrl: './update-password-dialog.component.html',
    styleUrl: './update-password-dialog.component.scss',
    standalone: true
})
export class UpdatePasswordDialogComponent {
    dialogRef = inject(MatDialogRef)
    fb = new FormBuilder()

    newPasswordForm = this.fb.group({
        password: [''],
    })

    onSubmit() {
        if (this.newPasswordForm.invalid) return
        this.dialogRef.close(this.newPasswordForm.value)
    }
}
