import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { filter } from 'rxjs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { ExpenseService } from '../../services/expense/expense-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatBadgeModule, MatMenuModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavComponent implements OnInit {
  title: string = '';
  date = new Date().toLocaleDateString('pt-BR', {
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  });

  notifications = [
    { id: 1, message: 'Novo lançamento de despesa', read: false },
    { id: 2, message: 'Novo lançamento de receita', read: false },
    { id: 3, message: 'Novo lançamento de receita', read: false },
  ];

  public constructor(
    private router: Router,
    private titleService: TitleService,
    private cdr: ChangeDetectorRef,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });

    this.updateTitle();
  }

  private updateTitle(): void {
    this.titleService.title$.subscribe((newTitle) => {
      this.title = newTitle;
      this.cdr.detectChanges();
    });
  }

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.expenseService.filterExpenses(searchTerm);
  }

  readNotification(notificationId: number) {
    const notification = this.notifications.find(
      (n) => n.id === notificationId
    );
    if (notification) {
      notification.read = true;
    }
    this.notifications = this.notifications.filter(
      (n) => n.id !== notificationId
    );
    console.log(this.notifications);
  }

  notificationsCount() {
    return this.notifications.filter((n) => !n.read).length;
  }
}
