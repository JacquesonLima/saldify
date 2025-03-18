import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense/expense-service.service';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  expensesData: any[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    // Inscreva-se para receber os dados atualizados
    this.expenseService.currentExpenses.subscribe((expenses) => {
      this.expensesData = expenses.slice(-5);
    });
  }
}
