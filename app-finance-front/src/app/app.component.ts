import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreComponent } from './components/core/core.component';

@Component({
  selector: 'app-root',
  imports: [CoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-finance';
}
