import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';

export const routes: Routes = [
  { path: '', redirectTo: 'session/warehouse', pathMatch: 'full' },
  { path: 'session', 
    component: MainComponent,
    children: [
      { path: 'warehouse', component: WarehouseComponent },
    ]
  },
];