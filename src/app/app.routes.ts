import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Assicurati di importare il componente Login
import { DashboardComponent } from './dashboard/dashboard.component';  // Assicurati di importare il componente Dashboard

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Reindirizza alla rotta login di default
  { path: 'login', component: LoginComponent },  // Definisce la rotta per il login
  { path: 'dashboard', component: DashboardComponent },  // Definisce la rotta per la dashboard
  // Puoi aggiungere altre rotte se necessario
];
