import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },

  {
    path: 'users',
    loadChildren: () => import('./user-management/user-management.module').then((m) => m.UserManagementModule), //Lazy load User management module
},
];
