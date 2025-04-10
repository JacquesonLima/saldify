import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SideComponent {
  public constructor(private router: Router) {}

  activeItem: string = '';
  name: string = 'Jacqueson Lima';

  setActive(item: string) {
    this.activeItem = item;
  }

  abrirHome() {
    this.setActive('home');
    this.router.navigate(['inicio']);
  }

  abrirDespesas() {
    this.setActive('despesas');
    this.router.navigate(['despesas']);
  }

  abrirCarteira() {
    this.setActive('carteira');
    this.router.navigate(['carteira']);
  }

  abrirPerfil() {
    this.setActive('profile');
    this.router.navigate(['profile']);
  }

  fazerLogout() {
    const confirm = window.confirm('Deseja realmente sair?');
    confirm ? this.router.navigate(['login']) : null;
  }
}
