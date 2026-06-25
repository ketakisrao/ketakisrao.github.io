import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="lab-main">
      <div class="lab-card neumorphic-outset">
        <div class="icon-spin-container">
          <span class="material-symbols-outlined icon-spin">science</span>
        </div>
        <h1 class="font-display">The Laboratory</h1>
        <p class="font-body-lg text-muted">
          Experiments in progress. Coming soon as browser tech evolves.
        </p>
        <div class="divider"></div>
        <span class="font-label-sm status-tag">System Status: Active</span>
      </div>
    </main>
  `,
  styles: [`
    .lab-main {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-xl) var(--space-lg);
      background-color: var(--sys-bg);
    }

    .lab-card {
      max-width: 500px;
      width: 100%;
      padding: var(--space-xl);
      text-align: center;
      border-radius: var(--radius-lg);
      border: var(--border-sage);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
    }

    .icon-spin-container {
      width: 80px;
      height: 80px;
      border-radius: var(--radius-full);
      background-color: color-mix(in srgb, var(--sys-primary) 10%, transparent);
      color: var(--sys-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-sm);
    }

    .icon-spin {
      font-size: 2.5rem;
      animation: rotate 6s linear infinite;
    }

    .text-muted {
      color: var(--sys-outline);
    }

    .divider {
      width: 60px;
      height: 2px;
      background-color: var(--sys-secondary-container);
      margin: var(--space-sm) 0;
    }

    .status-tag {
      color: var(--sys-secondary);
      font-weight: 700;
      letter-spacing: 0.05em;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class LabComponent {}
