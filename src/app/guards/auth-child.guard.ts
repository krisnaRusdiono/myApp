import { CanActivateChildFn } from '@angular/router';

// canActivateChildFn will be triggered each time children route is activated
export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  console.log('AuthChildGuard triggered!')
  return true;
};
