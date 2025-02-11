import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExpenseComponent } from './components/expense/expense.component';

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
    component: ExpenseComponent,
  },
];
