import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./pages/characters/characters.component').then(
        (m) => m.CharactersComponent,
      ),
  },
  {
    path: 'game',
    loadComponent: () =>
      import('./pages/game/game.component').then((m) => m.GameComponent),
  },
];
