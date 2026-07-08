import { Component } from '@angular/core';
import { GroundingBlogComponent } from './grounding-blog.component';
import { EvalsBlogComponent } from './evals-blog.component';
import { SecurityBlogComponent } from './security-blog.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [GroundingBlogComponent, EvalsBlogComponent, SecurityBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  selectedPost: any | null = null;

  posts = [
    {
      title: 'How to make AI agents production-ready: a grounding playbook',
      excerpt: 'A deep dive into three proven grounding techniques—tiered matching, log probabilities, and citation checks—to prevent hallucinations and secure AI agents in production.',
      date: 'July 8, 2026',
      readTime: '6 min read',
      tags: ['AI & Security', 'Grounding', 'Google Cloud'],
      slug: 'making-ai-agents-production-ready'
    },
    {
      title: 'Evals are not an afterthought: how to test LLM agents that actually work in production',
      excerpt: 'A practical guide to building offline and online evaluation pipelines for LLM agents, ensuring reliability and security before and after shipping to production.',
      date: 'July 8, 2026',
      readTime: '5 min read',
      tags: ['AI & Security', 'Evaluation', 'Google Cloud'],
      slug: 'evals-not-an-afterthought'
    },
    {
      title: 'Securing the prompt: a beginner\'s guide to LLM and agent security',
      excerpt: 'An introductory playbook on defending LLMs and autonomous agents against prompt injections, data leakage, and insecure integrations using the OWASP Top 10 for LLMs.',
      date: 'July 8, 2026',
      readTime: '4 min read',
      tags: ['AI & Security', 'InfoSec', 'OWASP'],
      slug: 'securing-the-prompt-beginner-guide'
    }
  ];

  selectPost(post: any): void {
    this.selectedPost = post;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deselectPost(): void {
    this.selectedPost = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
