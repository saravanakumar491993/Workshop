import { AuthInterceptorService } from './auth-interceptor.service';
import { InternetInterceptorService } from './internet-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: InternetInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
];