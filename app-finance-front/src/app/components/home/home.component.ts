import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { ResumeComponent } from '../resume/resume.component';
import { TitleService } from '../../services/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CardComponent, QuickActionsComponent, ResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private titleService: TitleService, private title: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
    this.title.setTitle('Dashboard - Saldify');
  }
}
