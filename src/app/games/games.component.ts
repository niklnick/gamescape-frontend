import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesService } from './games.service';
import { Game } from './models/game.model';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent implements OnInit {
  games$: Observable<Game[]> = new Observable<Game[]>();

  constructor(private readonly gamesService: GamesService) { }

  ngOnInit(): void {
    this.games$ = this.gamesService.getGames();
  }
}
