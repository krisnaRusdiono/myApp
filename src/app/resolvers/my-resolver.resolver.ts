import { ResolveFn } from '@angular/router';

export const myResolverResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
