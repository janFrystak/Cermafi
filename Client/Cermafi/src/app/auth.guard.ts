import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isAdmin = localStorage.getItem('is_admin') === 'true';

  if (isAdmin){
    return true;
  } else {
    return router.parseUrl('/login')
  }
};
