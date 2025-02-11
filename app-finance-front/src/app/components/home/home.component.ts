import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, QuickActionsComponent, ResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
