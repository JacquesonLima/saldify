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
  expensesData: any[] = [
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
    this.expenseService.updateExpenses(this.expensesData);
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onAddExpense(expense: Expense) {
    expense.date = new Date(expense.date).toDateString();
    this.expensesData.push(expense);
    this.isModalVisible = false;
    console.log('Despesa adicionada:', expense);
  }

  saveEdit() {
    this.editIndex = null;
  }

  deleteExpense(expense: Expense) {
    const confirm = window.confirm('Deseja realmente excluir esta despesa?');
    confirm
      ? (this.expensesData = this.expensesData.filter((e) => e !== expense))
      : null;
  }
}
