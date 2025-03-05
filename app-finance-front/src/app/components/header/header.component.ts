import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  title: string = '';

  public constructor(
    private router: Router,
    private titleService: TitleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.titleService.title$.subscribe((newTitle) => {
          this.title = newTitle;
          this.cdr.detectChanges();
        });
      });

    this.titleService.title$.subscribe((newTitle) => {
      this.title = newTitle;
      this.cdr.detectChanges();
    });
  }

  fazerLogout() {
    this.router.navigate(['login']);
  }
}
