import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExpenseComponent } from '../expense-modal/expense.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-actions',
  imports: [CommonModule, ExpenseComponent],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css',
})
export class QuickActionsComponent {
  isModalVisible = false;

  public constructor(private router: Router) {}

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  openWallet() {
    this.router.navigate(['carteira']);
  }
}
