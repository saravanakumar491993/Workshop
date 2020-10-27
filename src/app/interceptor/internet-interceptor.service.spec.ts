import { TestBed } from '@angular/core/testing';

import { InternetInterceptorService } from './internet-interceptor.service';

describe('InternetInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternetInterceptorService = TestBed.get(InternetInterceptorService);
    expect(service).toBeTruthy();
  });
});
