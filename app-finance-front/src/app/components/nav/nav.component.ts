import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  public constructor(private router: Router) {}

  activeItem: string = '';
  name: string = 'Jacqueson';

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

  fazerLogout() {
    const confirm = window.confirm('Deseja realmente sair?');
    confirm ? this.router.navigate(['login']) : null;
  }
}
