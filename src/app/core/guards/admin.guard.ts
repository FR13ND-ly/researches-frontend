import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const adminGuard: CanActivateFn = (route, state): any => {
  let authSevice = inject(AuthService);
  let platformId = inject(PLATFORM_ID);
  let router = inject(Router);
  
  if (isPlatformBrowser(platformId)) {
    let user: any = authSevice.getUser();
    if (!user) {
      router.navigate(['/admin/login']);
      return false;
    };
    if (user.isAdmin) return true;
    return false;
  }
};
