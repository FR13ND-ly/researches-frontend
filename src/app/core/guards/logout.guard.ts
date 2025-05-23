import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

export const logoutGuard: CanActivateFn = (route, state): any => {
  let authSevice = inject(AuthService);
  let platformId = inject(PLATFORM_ID);
  let router = inject(Router);
  
  if (isPlatformBrowser(platformId)) {
    let user: any = authSevice.getUser();
    if (user) {
      router.navigate(['/admin/']);
      return false;
    };
    return true;
  }
};
