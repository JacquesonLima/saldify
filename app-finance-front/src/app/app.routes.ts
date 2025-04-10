import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
  {
    path: 'carteira',
    component: WalletComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
