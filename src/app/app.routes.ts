import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'services', loadComponent: () => import('./features/page/content-page.component').then(m => m.ContentPageComponent), data: { page: 'services' } },
  { path: 'formations', loadComponent: () => import('./features/page/content-page.component').then(m => m.ContentPageComponent), data: { page: 'formations' } },
  { path: 'materiels', loadComponent: () => import('./features/page/content-page.component').then(m => m.ContentPageComponent), data: { page: 'materiels' } },
  { path: 'realisations', loadComponent: () => import('./features/page/content-page.component').then(m => m.ContentPageComponent), data: { page: 'realisations' } },
  { path: 'a-propos', loadComponent: () => import('./features/page/content-page.component').then(m => m.ContentPageComponent), data: { page: 'about' } },
  { path: 'contact', loadComponent: () => import('./features/page/content-page.component').then(m => m.ContentPageComponent), data: { page: 'contact' } },
  { path: '**', loadComponent: () => import('./features/page/content-page.component').then(m => m.ContentPageComponent), data: { page: 'notFound' } },
];
