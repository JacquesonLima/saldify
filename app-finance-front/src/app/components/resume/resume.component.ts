import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  expenseData = [
    { value: '10,00', description: 'Milk Shake', category: 'Alimentação' },
    { value: '35,00', description: 'Camiseta', category: 'Outros' },
    { value: '20,00', description: 'Cinema', category: 'Lazer' },
  ];
}
