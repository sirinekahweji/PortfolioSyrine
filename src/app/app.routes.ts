import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // corrige ce chemin selon ton projet

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
