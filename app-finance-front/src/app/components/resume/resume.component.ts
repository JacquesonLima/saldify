import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense/expense-service.service';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent implements OnInit {
  expensesData: any[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.filteredExpenses$.subscribe((expenses) => {
      this.expensesData = expenses.slice(-5);
    });
  }
}
