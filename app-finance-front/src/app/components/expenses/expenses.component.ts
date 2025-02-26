import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  imports: [CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent {
  expensesData = [
    {
      value: '10,00',
      date: '26/02/2025',
      description: 'Milk Shake',
      category: 'Alimentação',
    },
    {
      value: '35,00',
      date: '20/02/2025',
      description: 'Camiseta',
      category: 'Outros',
    },
    {
      value: '20,00',
      date: '16/02/2025',
      description: 'Cinema',
      category: 'Lazer',
    },
  ];
}
