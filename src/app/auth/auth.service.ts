import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './models/auth.model';
import { LogIn } from './models/log-in.model';
import { SignUp } from './models/sign-up.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL: string = 'http://localhost:3000/auth/';

  constructor(private readonly httpClient: HttpClient) { }

  signUp(signUp: SignUp): Observable<Auth> {
    return this.httpClient.post<Auth>(this.API_URL + 'sign-up', signUp);
  }

  logIn(logIn: LogIn): Observable<Auth> {
    return this.httpClient.post<Auth>(this.API_URL + 'log-in', logIn);
  }

  refresh(): Observable<Auth> {
    return this.httpClient.get<Auth>(this.API_URL + 'refresh');
  }
}
