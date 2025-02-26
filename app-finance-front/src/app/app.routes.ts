import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'despesas',
    component: ExpensesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
