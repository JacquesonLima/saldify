import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-core',
  imports: [NavComponent, HeaderComponent, CardComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent {}
