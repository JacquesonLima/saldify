import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wallet',
  imports: [],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
})
export class WalletComponent implements OnInit {
  constructor(private titleService: TitleService, private title: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Minha Carteira');
    this.title.setTitle('Carteira - Saldify');
  }
}
