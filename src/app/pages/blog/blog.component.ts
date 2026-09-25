import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroundingBlogComponent } from './grounding-blog.component';
import { EvalsBlogComponent } from './evals-blog.component';
import { SecurityBlogComponent } from './security-blog.component';
import { StaffMindsetBlogComponent } from './staff-mindset-blog.component';
import { JOURNAL_POSTS_DATA, BlogPostMeta } from './blog-posts.data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    GroundingBlogComponent,
    EvalsBlogComponent,
    SecurityBlogComponent,
    StaffMindsetBlogComponent,
    FormsModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  selectedPost: BlogPostMeta | null = null;
  searchText: string = '';
  sortOrder: 'desc' | 'asc' = 'desc';

  readonly posts: BlogPostMeta[] = JOURNAL_POSTS_DATA;

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
          this.router.navigate(['/journal']);
        }
      } else {
        this.selectedPost = null;
      }
    });
  }

  selectPost(post: BlogPostMeta): void {
    this.router.navigate(['/journal', post.slug]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deselectPost(): void {
    this.router.navigate(['/journal']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
