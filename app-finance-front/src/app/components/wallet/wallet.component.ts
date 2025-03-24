import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Title } from '@angular/platform-browser';
import { WalletModalComponent } from '../wallet-modal/wallet-modal.component';
import { CommonModule } from '@angular/common';

interface Wallet {
  name: string;
  amount: string;
}

@Component({
  selector: 'app-wallet',
  imports: [WalletModalComponent, CommonModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
})
export class WalletComponent implements OnInit {
  walletsData: any[] = [
    {
      name: 'Conta Principal',
      amount: '1.240,00',
    },
    {
      name: 'Conta Poupança',
      amount: '10.800,00',
    },
  ];

  constructor(private titleService: TitleService, private title: Title) {}

  isModalVisible: boolean = false;

  ngOnInit(): void {
    this.titleService.setTitle('Minha Carteira');
    this.title.setTitle('Carteira - Saldify');
  }

  onAddWallet(wallet: Wallet) {
    this.walletsData.push(wallet);
    this.isModalVisible = false;
    console.log('Carteira adicionada com sucesso');
  }

  openModal() {
    this.isModalVisible = true;
    console.log('abriu');
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
