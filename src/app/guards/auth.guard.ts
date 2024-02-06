import { CanActivateFn } from '@angular/router';
import { isLoggedIn, redirectToHome } from '../helpers';

// canActivateFn guard will be triggered each time route is activated
export const authGuard: CanActivateFn = (route, state) => {
  console.log('Authguard triggered');
  return isLoggedIn() || redirectToHome();
};
