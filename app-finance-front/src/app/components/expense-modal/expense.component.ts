import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Expense {
  value: number;
  date: string;
  description: string;
  category: string;
  observations: string;
}

@Component({
  selector: 'app-expense',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css',
})
export class ExpenseComponent {
  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();
  @Output() addExpense = new EventEmitter<Expense>();
  value: number = 0;
  date: string = '';
  description: string = '';
  category: string = '';
  observations: string = '';

  closeModal() {
    this.close.emit();
  }

  addNewExpense(): void {
    const newExpense: Expense = {
      value: this.value,
      date: new Date(this.date).toISOString(),
      description: this.description,
      category: this.category,
      observations: this.observations,
    };
    this.value = 0;
    this.date = '';
    this.description = '';
    this.category = '';
    this.observations = '';
    this.addExpense.emit(newExpense);
  }
}
