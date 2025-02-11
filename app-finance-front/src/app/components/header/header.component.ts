import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public constructor(private router: Router) {}

  fazerLogout() {
    this.router.navigate(['login']);
  }
}
