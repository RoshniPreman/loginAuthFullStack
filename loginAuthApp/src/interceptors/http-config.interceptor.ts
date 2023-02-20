import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>){
      const token = "jjfsdfsdfsdf";

      if(request.url.indexOf('login') < 0){
        return request.clone({
          setHeaders: {
            Authorization: token
          }
        })
      } else {
        return request;
      }
  }
}
