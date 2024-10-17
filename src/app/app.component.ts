import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Auth } from './auth/models/auth.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  auth$: Observable<Auth> = new Observable<Auth>();

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    const accessToken: string | null = localStorage.getItem('accessToken');

    if (accessToken) this.auth$ = this.authService.refresh();

    this.auth$.subscribe((auth: Auth) => {
      localStorage.setItem('accessToken', auth.accessToken);
      localStorage.setItem('refreshToken', auth.refreshToken);
    });
  }
}
