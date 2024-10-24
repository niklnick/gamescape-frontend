import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { MaterialsComponent } from './materials/materials.component';

export const routes: Routes = [
    { path: 'games', component: GamesComponent },
    { path: 'materials', component: MaterialsComponent }
];
