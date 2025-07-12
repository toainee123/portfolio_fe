import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const activeRouteGuard: CanActivateFn = (route, state) => {

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const router = inject(Router);

  if (isLoggedIn !== null) {
    // Redirect to login or show an error
    return true;
  }else{
    router.navigateByUrl('/login');
    return false;}
};
