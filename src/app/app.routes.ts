import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    // component: DashboardComponent,
    loadChildren: () =>
      import('./layouts/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
