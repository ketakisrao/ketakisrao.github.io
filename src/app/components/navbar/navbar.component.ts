import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  template: `
    <header class="navbar-header">
      <div class="navbar-container">
        <!-- Logo -->
        <a routerLink="/" class="navbar-logo" (click)="closeMenu()">
          Ketaki Rao
        </a>

        <!-- Desktop Navigation -->
        <nav class="navbar-links-desktop" aria-label="Desktop Navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
          <a routerLink="/lab" routerLinkActive="active" class="nav-link">Lab</a>
          <a routerLink="/hobbies" routerLinkActive="active" class="nav-link">Creative Corner</a>
          <a routerLink="/blog" routerLinkActive="active" class="nav-link">Blog</a>
        </nav>

        <!-- Actions -->
        <div class="navbar-actions-desktop">
          <app-theme-toggle></app-theme-toggle>
        </div>

        <!-- Mobile Menu Trigger -->
        <button 
          class="btn-menu-mobile md-hidden" 
          (click)="toggleMenu()" 
          [attr.aria-expanded]="isMenuOpen()" 
          aria-controls="mobile-navigation"
          aria-label="Toggle menu"
        >
          <span class="material-symbols-outlined">{{ isMenuOpen() ? 'close' : 'menu' }}</span>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div 
        id="mobile-navigation" 
        class="navbar-drawer-mobile" 
        [class.open]="isMenuOpen()"
        [attr.aria-hidden]="!isMenuOpen()"
      >
        <nav class="navbar-links-mobile" aria-label="Mobile Navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link-mobile" (click)="closeMenu()">Home</a>
          <a routerLink="/lab" routerLinkActive="active" class="nav-link-mobile" (click)="closeMenu()">Lab</a>
          <a routerLink="/hobbies" routerLinkActive="active" class="nav-link-mobile" (click)="closeMenu()">Creative Corner</a>
          <a routerLink="/blog" routerLinkActive="active" class="nav-link-mobile" (click)="closeMenu()">Blog</a>
          <div class="theme-toggle-container-mobile">
            <span class="theme-label font-label-sm">Theme</span>
            <app-theme-toggle></app-theme-toggle>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .navbar-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      z-index: 100;
      background-color: color-mix(in srgb, var(--sys-bg) 85%, transparent);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-b: var(--border-sage);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
      transition: background-color 0.4s ease, border-color 0.4s ease;
      border-bottom: var(--border-sage);
    }

    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: var(--container-max);
      height: 100%;
      margin: 0 auto;
      padding: 0 var(--space-lg);
    }

    .navbar-logo {
      font-family: var(--font-display);
      font-size: 1.5rem; /* 24px */
      font-weight: 700;
      color: var(--sys-primary);
      text-decoration: none;
      letter-spacing: -0.01em;
      transition: color 0.3s ease;
    }

    .navbar-logo:hover {
      color: var(--sys-secondary);
    }

    /* Desktop Links */
    .navbar-links-desktop {
      display: none;
      align-items: center;
      gap: var(--space-xl);
    }

    @media (min-width: 768px) {
      .navbar-links-desktop {
        display: flex;
      }
    }

    .nav-link {
      font-family: var(--font-label);
      font-size: 0.75rem; /* 12px */
      font-weight: 600;
      color: var(--sys-outline);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: var(--space-xs) 0;
      border-bottom: 2px solid transparent;
      transition: all 0.3s ease;
    }

    .nav-link:hover {
      color: var(--sys-primary);
      transform: translateY(-1px);
    }

    .nav-link.active {
      color: var(--sys-primary);
      border-bottom-color: var(--sys-secondary);
      font-weight: 700;
    }

    .navbar-actions-desktop {
      display: none;
    }

    @media (min-width: 768px) {
      .navbar-actions-desktop {
        display: block;
      }
    }

    /* Mobile hamburger menu */
    .btn-menu-mobile {
      background: none;
      border: none;
      color: var(--sys-primary);
      cursor: pointer;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-full);
      transition: background-color 0.2s ease;
    }

    .btn-menu-mobile:hover {
      background-color: var(--sys-surface-low);
    }

    @media (min-width: 768px) {
      .btn-menu-mobile.md-hidden {
        display: none;
      }
    }

    /* Mobile Drawer */
    .navbar-drawer-mobile {
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      height: calc(100vh - 80px);
      background-color: var(--sys-bg);
      z-index: 99;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                  opacity 0.3s ease, 
                  visibility 0.4s ease;
      overflow-y: auto;
      border-top: var(--border-sage);
    }

    .navbar-drawer-mobile.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .navbar-links-mobile {
      display: flex;
      flex-direction: column;
      padding: var(--space-xl) var(--space-lg);
      gap: var(--space-lg);
    }

    .nav-link-mobile {
      font-family: var(--font-headline);
      font-size: 1.5rem; /* 24px */
      font-weight: 600;
      color: var(--sys-on-bg);
      text-decoration: none;
      padding: var(--space-sm) 0;
      border-bottom: 1px solid var(--sys-outline-variant);
      transition: color 0.2s ease;
    }

    .nav-link-mobile:hover, .nav-link-mobile.active {
      color: var(--sys-primary);
    }

    .theme-toggle-container-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--space-md);
    }

    .theme-label {
      color: var(--sys-outline);
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
