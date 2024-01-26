import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { myResolverResolver } from './my-resolver.resolver';

describe('myResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => myResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
