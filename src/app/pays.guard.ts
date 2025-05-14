import { CanActivateFn } from '@angular/router';

export const paysGuard: CanActivateFn = (route, state) => {
  return true;
};
