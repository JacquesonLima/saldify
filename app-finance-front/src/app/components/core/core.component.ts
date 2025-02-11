import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-core',
  imports: [NavComponent, HeaderComponent, RouterOutlet],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent {}
