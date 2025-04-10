import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  isSecurityActive = false;
  isAccountActive = true;
  activeItem: string = 'account';

  constructor(private titleService: TitleService, private title: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Meu Perfil');
    this.title.setTitle('Meu Perfil - Saldify');
  }

  setActiveItem(item: string) {
    this.activeItem = item;
  }

  openSecurity() {
    this.setActiveItem('security');
    this.isSecurityActive = true;
    this.isAccountActive = false;
  }

  openAccount() {
    this.setActiveItem('account');
    this.isAccountActive = true;
    this.isSecurityActive = false;
  }
}
