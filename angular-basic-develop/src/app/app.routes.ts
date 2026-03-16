import { Routes } from '@angular/router';
 
export const routes: Routes = [
  { path: 'country', loadComponent: () => import('./pages/country/country.component').then(m => m.CountryComponent) },
  { path: 'university', loadComponent: () => import('./pages/university/university.component').then(m => m.UniversityComponent) },
  { path: 'dragon-ball', loadComponent: () => import('./pages/dragon-ball/dragon-ball.component').then(m => m.DragonballComponent) },
  { path: 'valorant-maps', loadComponent: () => import('./pages/valorant-maps/valorant-maps.component').then(m => m.ValorantMapsComponent) },
];
