import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, of, tap } from 'rxjs';
import { userActions } from '../../state/user/user.actions';
import { setLoading } from '../../state/loading/loading.actions';
import { environment } from '../../../environments/environment';
import { jwtDecode } from "jwt-decode";
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private store = inject(Store);
  snackbar = inject(MatSnackBar);
  platformId = inject(PLATFORM_ID);

  http = inject(HttpClient);
  apiUrl = environment.apiUrl + 'auth/';

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.authorization()
    }
  }

  authentification(data: any) {
    return this.http
      .post(`${this.apiUrl}login/`, data.loginCredentianls)
      .pipe(
        tap((user: any) => {
          console.log(user)
          if (!user) return;
          localStorage.setItem('token', user.token);
          location.href = '/admin';
        }),
        catchError((): any => {
          this.store.dispatch(setLoading({ state: false }));
          this.snackbar.open('Username sau parolă greşită', '', {
            duration: 3000,
          });
          return of({})
        })
      );
  }

  authorization() {
    let user: any = this.getUser();
    if (!user) return
    this.store.dispatch(userActions.loginSuccess({ user }));
  }

  getUser() {
    try {
      const token = localStorage.getItem("token") || '';
      if (token === '') return null;
      const user = jwtDecode(token); 
      return user
    } catch (error: any) {
      console.error("Invalid token:", error.message);
      return null
    }
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(['/']);
  }
}
