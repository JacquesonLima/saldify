import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Title } from '@angular/platform-browser';
import { ExpenseComponent } from '../expense-modal/expense.component';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense/expense-service.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

interface Expense {
  value: number;
  date: string;
  description: string;
  category: string;
  observations: string;
}

@Component({
  selector: 'app-expenses',
  imports: [
    CommonModule,
    ExpenseComponent,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  filteredExpenses: any[] = [];

  editIndex: number | null = null;
  isModalVisible = false;
  expenses: ExpenseComponent[] = [];

  constructor(
    private titleService: TitleService,
    private title: Title,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Minhas Despesas');
    this.title.setTitle('Despesas - Saldify');
    this.expenseService.updateExpenses(this.expenses);
    this.expenseService.filteredExpenses$.subscribe((expenses) => {
      this.filteredExpenses = expenses;
    });
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onAddExpense(expense: Expense) {
    this.expenseService.AddExpense(expense);
    this.isModalVisible = false;
    console.log('Despesa adicionada:', expense);
  }

  saveEdit() {
    this.editIndex = null;
    this.expenseService.updateExpenses(this.expenses);
  }

  onDeleteExpense(expense: Expense) {
    this.expenseService.deleteExpense(expense);
    console.log('Despesa excluída:', expense);
  }
}
