import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'session', pathMatch: 'full' },
  { path: 'session', 
    component: MainComponent,
    children: [      
    ]
  },
];