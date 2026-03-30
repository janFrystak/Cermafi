import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAuth().pipe(
    map(() => true),
    catchError(() => of(router.parseUrl('/admin/login')))
  );
};