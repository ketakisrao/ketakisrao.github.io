import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'user-theme';
  
  // Create a signal for the current theme, initializing from local storage or system preference
  currentTheme = signal<'light' | 'dark'>('light');

  constructor() {
    this.initializeTheme();
    
    // Set up an effect that automatically applies the theme to the HTML tag when the signal changes
    effect(() => {
      const theme = this.currentTheme();
      const root = document.documentElement;
      
      root.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
      
      localStorage.setItem(this.THEME_KEY, theme);
    });
  }

  toggleTheme() {
    this.currentTheme.update(theme => theme === 'light' ? 'dark' : 'light');
  }

  private initializeTheme() {
    // Check local storage first
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.currentTheme.set(savedTheme);
      return;
    }

    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.currentTheme.set(systemPrefersDark ? 'dark' : 'light');
  }
}
