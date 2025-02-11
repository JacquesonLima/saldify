import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  public constructor(private router: Router) {}

  abrirHome() {
    this.router.navigate(['inicio']);
  }

  abrirDespesas() {
    this.router.navigate(['despesas']);
  }
}
