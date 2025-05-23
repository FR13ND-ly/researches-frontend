import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/utils/material.module';

@Component({
    selector: 'app-add-user-dialog',
    imports: [MaterialModule, ReactiveFormsModule],
    templateUrl: './add-user-dialog.component.html',
    styleUrl: './add-user-dialog.component.scss',
    standalone: true
})
export class AddUserDialogComponent {
    fb = new FormBuilder()
    dialogRef = inject(MatDialogRef)

    userForm = this.fb.group({
        username: [''],
        email: [''],
        password: [''],
    })

    onSubmit() {
        if (this.userForm.invalid) return
        this.dialogRef.close(this.userForm.value)
    }
}
