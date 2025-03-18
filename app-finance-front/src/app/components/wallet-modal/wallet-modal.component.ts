import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Wallet {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-wallet-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './wallet-modal.component.html',
  styleUrl: './wallet-modal.component.css',
})
export class WalletModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addWallet = new EventEmitter<Wallet>();
  name: string = '';
  amount: number = 0;

  fecharModal() {
    this.close.emit();
  }

  salvarCarteira(): void {
    const newWallet: Wallet = {
      name: this.name,
      amount: this.amount,
    };
    this.name = '';
    this.amount = 0;
    this.addWallet.emit(newWallet);
  }
}
