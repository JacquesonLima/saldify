import { Component } from '@angular/core';
import { SideComponent } from '../sidebar/sidebar.component';
import { NavComponent } from '../navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-core',
  imports: [SideComponent, NavComponent, RouterOutlet, CommonModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent {
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
