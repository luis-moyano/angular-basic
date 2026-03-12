import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'country', loadComponent: () => import('./pages/country/country.component').then(m => m.CountryComponent) },
  { path: 'university', loadComponent: () => import('./pages/university/university.component').then(m => m.UniversityComponent) },
];