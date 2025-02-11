import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  cardsData = [
    { title: 'Saldo Atual', value: 'R$ 1.240,00', color: 'green' },
    { title: 'Despesas do Mês', value: 'R$ 500,00', color: 'red' },
    { title: 'Receitas do Mês', value: 'R$ 1.740,00', color: 'cornflowerblue' },
  ];
}
