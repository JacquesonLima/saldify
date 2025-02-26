import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExpenseComponent } from '../expense-modal/expense.component';

@Component({
  selector: 'app-quick-actions',
  imports: [CommonModule, ExpenseComponent],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css',
})
export class QuickActionsComponent {
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
