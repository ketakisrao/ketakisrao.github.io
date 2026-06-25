import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hobby {
  name: string;
  category: string;
  description: string;
  gridClass: string;
  aspectRatio: string;
  icon: string;
  svgColor: string;
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="hobbies-main">
      <header class="hobbies-header">
        <div class="header-badge font-label-sm">Creative Corner</div>
        <h1 class="font-display">Tactile Explorations</h1>
        <p class="font-body-lg text-muted">
          Where building stops and crafting begins. Visualizing the physical, meditative arts that balance the screen.
        </p>
      </header>

      <!-- Asymmetrical Collage Grid -->
      <section class="hobbies-grid" aria-label="Hobbies collage">
        <article 
          *ngFor="let hobby of hobbies; let idx = index" 
          class="card neumorphic-outset hobby-card" 
          [ngClass]="hobby.gridClass"
          [style.animation-delay.ms]="idx * 100"
        >
          <div class="aspect-wrapper" [style.aspect-ratio]="hobby.aspectRatio">
            <!-- Asymmetric SVG abstract vector pattern representing the hobby -->
            <svg class="hobby-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" [style.color]="hobby.svgColor">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.1" stroke-opacity="0.15"/>
                </pattern>
                <linearGradient [id]="'grad-' + idx" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="currentColor" stop-opacity="0.2" />
                  <stop offset="100%" stop-color="var(--sys-bg)" stop-opacity="0.8" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" [attr.fill]="'url(#grad-' + idx + ')'" />
              <rect width="100" height="100" fill="url(#grid)" />
              
              <!-- Custom SVG art based on the hobby icon -->
              <circle *ngIf="hobby.name === 'Pottery'" cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="1 3" />
              <circle *ngIf="hobby.name === 'Pottery'" cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1" />
              <path *ngIf="hobby.name === 'Origami'" d="M10,50 L50,10 L90,50 L50,90 Z M50,10 L50,90 M10,50 L90,50 M30,30 L70,70" fill="none" stroke="currentColor" stroke-width="0.8"/>
              <path *ngIf="hobby.name === 'Crochet'" d="M20,50 C40,20 60,80 80,50 M10,30 C30,70 50,20 90,60" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
              <circle *ngIf="hobby.name === 'Cooking & Plating'" cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="0.8" />
              <path *ngIf="hobby.name === 'Cooking & Plating'" d="M40,50 Q50,30 60,50 T80,50" fill="none" stroke="currentColor" stroke-width="1.5"/>
              <line *ngIf="hobby.name === 'Embroidery'" x1="10" y1="90" x2="90" y2="10" stroke="currentColor" stroke-width="0.5" />
              <path *ngIf="hobby.name === 'Embroidery'" d="M30,30 C50,10 70,50 50,70" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
              <circle *ngIf="hobby.name === 'Dance'" cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="0.5" />
              <path *ngIf="hobby.name === 'Dance'" d="M50,15 C60,40 30,60 50,85" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <rect *ngIf="hobby.name === 'Sewing'" x="20" y="20" width="60" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="0.7"/>
              <path *ngIf="hobby.name === 'Sewing'" d="M30,50 L70,50 M50,30 L50,70" stroke="currentColor" stroke-width="1"/>
              <circle *ngIf="hobby.name === 'Knitting'" cx="30" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="1" />
              <circle *ngIf="hobby.name === 'Knitting'" cx="70" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="1" />
              <path *ngIf="hobby.name === 'Knitting'" d="M40,50 Q50,40 60,50" fill="none" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            
            <div class="hover-overlay">
              <span class="material-symbols-outlined gallery-icon">{{ hobby.icon }}</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="font-label-sm hobby-cat">{{ hobby.category }}</span>
            <h2 class="font-headline-md hobby-name">{{ hobby.name }}</h2>
            <p class="font-body-md text-muted hobby-desc">{{ hobby.description }}</p>
          </div>
        </article>
      </section>
    </main>
  `,
  styles: [`
    .hobbies-main {
      min-height: 100vh;
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 120px var(--space-lg) var(--space-xl) var(--space-lg);
      background-color: var(--sys-bg);
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }

    .hobbies-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-xs);
    }

    .header-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: var(--radius-full);
      background-color: color-mix(in srgb, var(--sys-secondary) 12%, transparent);
      color: var(--sys-secondary);
      font-weight: 700;
    }

    .text-muted {
      color: var(--sys-outline);
    }

    /* Asymmetrical Grid Settings */
    .hobbies-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }

    @media (min-width: 768px) {
      .hobbies-grid {
        grid-template-columns: repeat(12, 1fr);
      }
    }

    /* Grid positions for asymmetrical balance */
    .grid-dance { grid-column: span 12; }
    .grid-pottery { grid-column: span 12; }
    .grid-origami { grid-column: span 12; }
    .grid-crochet { grid-column: span 12; }
    .grid-knitting { grid-column: span 12; }
    .grid-cooking { grid-column: span 12; }
    .grid-embroidery { grid-column: span 12; }
    .grid-sewing { grid-column: span 12; }

    @media (min-width: 768px) {
      .grid-dance { grid-column: span 8; grid-row: span 2; }
      .grid-pottery { grid-column: span 4; }
      .grid-origami { grid-column: span 4; }
      .grid-crochet { grid-column: span 8; }
      .grid-knitting { grid-column: span 4; }
      .grid-cooking { grid-column: span 6; }
      .grid-embroidery { grid-column: span 6; }
      .grid-sewing { grid-column: span 12; }
    }

    /* Hobby Card Styles */
    .hobby-card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 0;
      border-radius: var(--radius-md);
      border: var(--border-sage);
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .aspect-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      background-color: var(--sys-surface-low);
      border-bottom: var(--border-sage);
    }

    .hobby-svg {
      width: 100%;
      height: 100%;
      display: block;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hobby-card:hover .hobby-svg {
      transform: scale(1.05) rotate(1deg);
    }

    .hover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(26, 26, 26, 0.03);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .hobby-card:hover .hover-overlay {
      opacity: 1;
    }

    .gallery-icon {
      font-size: 3rem;
      color: var(--sys-primary);
      transform: scale(0.8);
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .hobby-card:hover .gallery-icon {
      transform: scale(1);
    }

    .card-footer {
      padding: var(--space-lg);
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .hobby-cat {
      color: var(--sys-secondary);
      font-weight: 700;
    }

    .hobby-name {
      color: var(--sys-on-bg);
      line-height: 1.2;
    }

    .hobby-desc {
      font-size: 0.95rem;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class HobbiesComponent {
  hobbies: Hobby[] = [
    {
      name: 'Dance',
      category: 'Movement & Rhythm',
      description: 'Translating fluid mechanical principles into physical expression. A study in kinetic weight, momentum, and biological dynamics.',
      gridClass: 'grid-dance',
      aspectRatio: '16/10',
      icon: 'directions_walk',
      svgColor: 'var(--sys-primary)',
    },
    {
      name: 'Pottery',
      category: 'Clay & Centering',
      description: 'The ultimate tactile balance. Feeling the exact rotational load on clay on a spinning wheel, shaping objects with direct physical feedback.',
      gridClass: 'grid-pottery',
      aspectRatio: '1/1',
      icon: 'rotate_right',
      svgColor: 'var(--sys-secondary)',
    },
    {
      name: 'Origami',
      category: 'Folding & Geometry',
      description: 'Mathematical logic applied to single sheets of paper. Crafting complex 3D structures through precise geometric fold constraints.',
      gridClass: 'grid-origami',
      aspectRatio: '1/1',
      icon: 'architecture',
      svgColor: 'var(--sys-tertiary)',
    },
    {
      name: 'Crochet',
      category: 'Stitches & Loop Art',
      description: 'Building organic mesh lattices with single thread algorithms. Like compiler logic but using a hook and wool yarn.',
      gridClass: 'grid-crochet',
      aspectRatio: '16/9',
      icon: 'gesture',
      svgColor: 'var(--sys-primary)',
    },
    {
      name: 'Knitting',
      category: 'Thread Algorithms',
      description: 'Double needle matrix construction. Designing tactile textile logic systems, balancing tension and rhythmic pattern iteration.',
      gridClass: 'grid-knitting',
      aspectRatio: '1/1',
      icon: 'grid_view',
      svgColor: 'var(--sys-secondary)',
    },
    {
      name: 'Cooking & Plating',
      category: 'Sensory Design',
      description: 'Composing physical ingredients for flavor, contrast, and structural aesthetic. Designing visual plater layout composition.',
      gridClass: 'grid-cooking',
      aspectRatio: '4/3',
      icon: 'restaurant',
      svgColor: 'var(--sys-primary)',
    },
    {
      name: 'Embroidery',
      category: 'Stitch Art',
      description: 'Detailing patterns onto linen canvases. Crafting illustrative textured artwork through slow, meditative physical execution.',
      gridClass: 'grid-embroidery',
      aspectRatio: '4/3',
      icon: 'palette',
      svgColor: 'var(--sys-tertiary)',
    },
    {
      name: 'Sewing',
      category: 'Garments & Construction',
      description: 'Assembling flat 2D pattern segments into form-fitting 3D structures. Drafting structural layouts that conform perfectly to movement.',
      gridClass: 'grid-sewing',
      aspectRatio: '21/9',
      icon: 'content_cut',
      svgColor: 'var(--sys-primary)',
    }
  ];
}
