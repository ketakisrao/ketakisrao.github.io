import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="blog-main">
      <header class="blog-header">
        <h1 class="font-display">The Journal</h1>
        <p class="font-body-lg text-muted">
          Insights on UI architectures, web performance, and the craftsmanship of coding.
        </p>
      </header>

      <section class="blog-grid" aria-label="Blog posts list">
        <article class="card neumorphic-outset blog-card" *ngFor="let post of posts">
          <div class="post-meta font-label-sm">
            <span>{{ post.date }}</span>
            <span class="dot">•</span>
            <span>{{ post.readTime }}</span>
          </div>
          <h2 class="font-headline-md post-title">{{ post.title }}</h2>
          <p class="font-body-md text-muted post-excerpt">
            {{ post.excerpt }}
          </p>
          <div class="post-tags">
            <span class="chip font-label-sm" *ngFor="let tag of post.tags">{{ tag }}</span>
          </div>
        </article>
      </section>
    </main>
  `,
  styles: [`
    .blog-main {
      min-height: 100vh;
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 120px var(--space-lg) var(--space-xl) var(--space-lg);
      background-color: var(--sys-bg);
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }

    .blog-header {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .text-muted {
      color: var(--sys-outline);
    }

    .blog-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }

    @media (min-width: 768px) {
      .blog-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 992px) {
      .blog-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .blog-card {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      padding: var(--space-lg);
      border-radius: var(--radius-md);
      border: var(--border-sage);
      cursor: pointer;
    }

    .blog-card:hover {
      transform: translateY(-4px);
      border-color: rgba(82, 100, 66, 0.5);
    }

    .post-meta {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: var(--sys-secondary);
      font-weight: 600;
    }

    .dot {
      color: var(--sys-outline-variant);
    }

    .post-title {
      color: var(--sys-on-bg);
      line-height: 1.3;
    }

    .post-excerpt {
      flex-grow: 1;
      font-size: 0.95rem;
    }

    .post-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-top: var(--space-sm);
    }

    .chip {
      padding: 2px 10px;
      border-radius: var(--radius-full);
      background-color: color-mix(in srgb, var(--sys-primary) 6%, transparent);
      color: var(--sys-primary);
      font-size: 0.65rem;
      font-weight: 700;
    }
  `]
})
export class BlogComponent {
  posts = [
    {
      title: 'The Tactile Digital: Designing with Weight',
      excerpt: 'How to break away from sterile modernism by introducing organic neumorphism and physical interactions into digital layouts.',
      date: 'June 18, 2026',
      readTime: '6 min read',
      tags: ['Design Systems', 'HCI', 'CSS'],
    },
    {
      title: 'Web AI & Gemini Nano: Client-Side RAG',
      excerpt: 'Exploring the capabilities of on-device LLMs inside the browser and how it fundamentally alters frontend state management.',
      date: 'May 28, 2026',
      readTime: '8 min read',
      tags: ['Web AI', 'Gemini', 'TypeScript'],
    },
    {
      title: 'Container Queries: The Component Paradigm',
      excerpt: 'Why component localized responsiveness is far superior to global viewport queries, and how to scale design tokens with @container.',
      date: 'April 10, 2026',
      readTime: '5 min read',
      tags: ['CSS Grid', 'Responsiveness', 'Architecture'],
    }
  ];
}
