import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Game } from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private readonly apiUrl: string = environment.apiUrl + '/games';

  constructor(private readonly httpClient: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.apiUrl);
  }
}
