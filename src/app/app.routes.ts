import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mis-avisos',
    loadComponent: () => import('./pages/mis-avisos/mis-avisos.page').then( m => m.MisAvisosPage)
  },
  {
    path: 'crear-aviso',
    loadComponent: () => import('./pages/crear-aviso/crear-aviso.page').then( m => m.CrearAvisoPage)
  },
];
