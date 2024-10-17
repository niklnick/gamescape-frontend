import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Auth } from '../models/auth.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.signupForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSignUp(signupForm: FormGroup): void {
    this.authService.signUp(signupForm.value).subscribe({
      next: (auth: Auth) => console.log(auth),
      error: (httpErrorResponse: HttpErrorResponse) => console.log(httpErrorResponse.error.message),
      complete: () => this.router.navigate([''])
    });
  }
}
