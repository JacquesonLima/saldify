import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-core',
  imports: [NavComponent, HeaderComponent, RouterOutlet, CommonModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent {
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
