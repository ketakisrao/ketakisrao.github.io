import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeService } from './theme.service';

declare const gtag: Function | undefined;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  // Inject theme service to trigger its construction and initial theme application effect
  private themeService = inject(ThemeService);
  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (typeof gtag !== 'undefined') {
          gtag('config', 'G-1VSF2YFC0Z', {
            page_path: event.urlAfterRedirects,
          });
        }
      });
  }
}
