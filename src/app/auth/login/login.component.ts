import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Auth } from '../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private readonly authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    });
  }

  onLogIn(loginForm: FormGroup): void {
    this.authService.logIn(loginForm.value).subscribe({
      next: (auth: Auth) => console.log(auth),
      error: (httpErrorResponse: HttpErrorResponse) => console.log(httpErrorResponse.error.message),
      complete: () => { }
    });
  }
}
