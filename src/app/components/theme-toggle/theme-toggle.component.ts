import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="theme-switch-track" 
      (click)="themeService.toggleTheme()" 
      [attr.aria-label]="themeService.currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      [class.dark-active]="themeService.currentTheme() === 'dark'"
    >
      <span class="theme-switch-thumb">
        <span class="material-symbols-outlined icon" [class.active]="themeService.currentTheme() === 'light'">light_mode</span>
        <span class="material-symbols-outlined icon" [class.active]="themeService.currentTheme() === 'dark'">dark_mode</span>
      </span>
    </button>
  `,
  styles: [`
    .theme-switch-track {
      width: 60px;
      height: 32px;
      border-radius: var(--radius-full);
      background-color: var(--sys-surface-low);
      border: 1px solid var(--sys-outline-variant);
      box-shadow: var(--shadow-neumorphic-inset);
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 2px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .theme-switch-track:focus-visible {
      outline: 2px solid var(--sys-secondary);
      outline-offset: 4px;
    }

    .theme-switch-track.dark-active {
      /* Subtle Radiant Gold inner glow for the track in dark mode */
      box-shadow: 
        inset -2px -2px 8px rgba(255, 255, 255, 0.05), 
        inset 4px 4px 12px rgba(0, 0, 0, 0.4),
        inset 0 0 6px rgba(254, 214, 91, 0.3);
      border-color: rgba(254, 214, 91, 0.4);
    }

    .theme-switch-thumb {
      width: 26px;
      height: 26px;
      border-radius: var(--radius-full);
      background-color: var(--sys-primary); /* Sage Green outset thumb */
      box-shadow: var(--shadow-neumorphic-outset);
      position: absolute;
      left: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
    }

    .dark-active .theme-switch-thumb {
      left: 30px;
      background-color: var(--sys-primary);
    }

    .icon {
      font-size: 16px;
      color: var(--sys-on-primary);
      position: absolute;
      opacity: 0;
      transform: scale(0.5) rotate(-45deg);
      transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      user-select: none;
    }

    .icon.active {
      opacity: 1;
      transform: scale(1) rotate(0);
    }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
}
