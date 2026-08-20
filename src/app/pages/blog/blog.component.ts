import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroundingBlogComponent } from './grounding-blog.component';
import { EvalsBlogComponent } from './evals-blog.component';
import { SecurityBlogComponent } from './security-blog.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [GroundingBlogComponent, EvalsBlogComponent, SecurityBlogComponent, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  selectedPost: any | null = null;
  searchText: string = '';
  sortOrder: 'desc' | 'asc' = 'desc';

  posts = [
    {
      title: 'How to make AI agents production-ready: a grounding playbook',
      excerpt: 'A deep dive into three proven grounding techniques—tiered matching, log probabilities, and citation checks—to prevent hallucinations and secure AI agents in production.',
      date: 'July 8, 2026',
      readTime: '6 min read',
      tags: ['AI Engineering', 'Grounding', 'DX & Enablement'],
      slug: 'making-ai-agents-production-ready'
    },
    {
      title: 'Evals are not an afterthought: how to test LLM agents that actually work in production',
      excerpt: 'A practical guide to building offline and online evaluation pipelines for LLM agents, ensuring reliability and security before and after shipping to production.',
      date: 'July 6, 2026',
      readTime: '5 min read',
      tags: ['AI Evals', 'Observability', 'Metrics'],
      slug: 'evals-not-an-afterthought'
    },
    {
      title: 'Securing the prompt: a beginner\'s guide to LLM and agent security',
      excerpt: 'An introductory playbook on defending LLMs and autonomous agents against prompt injections, data leakage, and insecure integrations using the OWASP Top 10 for LLMs.',
      date: 'July 4, 2026',
      readTime: '4 min read',
      tags: ['Developer Education', 'Prompt Security', 'InfoSec'],
      slug: 'securing-the-prompt-beginner-guide'
    }
  ];

  get filteredAndSortedPosts() {
    let result = this.posts.filter(post => 
      post.title.toLowerCase().includes(this.searchText.trim().toLowerCase())
    );

    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return this.sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const post = this.posts.find(p => p.slug === slug);
        if (post) {
          this.selectedPost = post;
        } else {
          this.selectedPost = null;
          this.router.navigate(['/blog']);
        }
      } else {
        this.selectedPost = null;
      }
    });
  }

  selectPost(post: any): void {
    this.router.navigate(['/blog', post.slug]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deselectPost(): void {
    this.router.navigate(['/blog']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
