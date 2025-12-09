import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Mod4demo1Service} from '../services/mod4demo1Service';

export const authGuard: CanActivateFn = (route, state) => {

  let authService = inject(Mod4demo1Service)
  let router = inject(Router)

  if (authService.getUser()) {
    return true;
  } else {
    router.navigate(['/about-us'], {queryParams : {message : "Accès interdit"}})
    return false
  }
};
