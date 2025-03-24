import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Expense {
  value: number;
  date: string;
  description: string;
  category: string;
  observations: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses = [
    {
      value: 250.0,
      date: 'Sat Mar 15 2025',
      description: 'Compras do Mercado',
      category: 'Alimentação',
      observations: '',
    },
    {
      value: 120.0,
      date: 'Sat Mar 15 2025',
      description: 'Roupas',
      category: 'Outros',
      observations: 'Promoção',
    },
    {
      value: 35.0,
      date: 'Sat Mar 15 2025',
      description: 'Cinema',
      category: 'Lazer',
      observations: 'Filme de ação',
    },
    {
      value: 220.0,
      date: 'Sat Mar 15 2025',
      description: 'Curso de Inglês',
      category: 'Educação',
      observations: '',
    },
    {
      value: 140.0,
      date: 'Sat Mar 15 2025',
      description: 'Serviços de Streaming',
      category: 'Lazer',
      observations: '',
    },
    {
      value: 65.0,
      date: 'Sat Mar 15 2025',
      description: 'Acadêmia',
      category: 'Saúde',
      observations: '',
    },
  ];

  private expensesSource = new BehaviorSubject<any[]>([]);
  currentExpenses = this.expensesSource.asObservable();

  private filteredExpenses = new BehaviorSubject<any[]>(this.expenses);
  filteredExpenses$ = this.filteredExpenses.asObservable();

  constructor() {}

  AddExpense(expense: Expense) {
    this.expenses.push(expense);
    this.filteredExpenses.next(this.expenses);
  }

  filterExpenses(searchTerm: string) {
    const filtered = this.expenses.filter((expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.filteredExpenses.next(filtered);
  }

  updateExpenses(expenses: any[]) {
    this.expensesSource.next(expenses);
  }

  deleteExpense(expenseParam: Expense) {
    const confirm = window.confirm('Deseja realmente excluir esta despesa?');
    confirm
      ? (this.expenses = this.expenses.filter(
          (expense) => expenseParam !== expense
        ))
      : null;
    this.filteredExpenses.next(this.expenses);
  }
}
