import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { userActions } from '../../../../state/user/user.actions';
import { setLoading } from '../../../../state/loading/loading.actions';
import { MaterialModule } from '../../../../core/utils/material.module';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, MaterialModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: true
})
export class LoginComponent {
    store = inject(Store)

    fb = new FormBuilder()
  
    loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    onSubmit() {
        if (!this.loginForm.valid) return
        let loginCredentianls = {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password
        }
        this.store.dispatch(setLoading({ state: true }))
        this.store.dispatch(userActions.login({ loginCredentianls }))
    }
}
