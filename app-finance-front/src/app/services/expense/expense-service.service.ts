import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expensesSource = new BehaviorSubject<any[]>([]);
  currentExpenses = this.expensesSource.asObservable();

  constructor() {}

  updateExpenses(expenses: any[]) {
    this.expensesSource.next(expenses);
  }
}
