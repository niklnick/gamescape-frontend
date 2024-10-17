import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
  }));
};
