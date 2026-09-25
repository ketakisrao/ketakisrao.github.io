import { Component, Output, EventEmitter } from '@angular/core';
import { JOURNAL_POSTS_DATA } from './blog-posts.data';

@Component({
  selector: 'app-grounding-blog',
  standalone: true,
  imports: [],
  templateUrl: './grounding-blog.component.html',
  styleUrl: './blog.component.css'
})
export class GroundingBlogComponent {
  @Output() back = new EventEmitter<void>();
  readonly post = JOURNAL_POSTS_DATA.find(p => p.slug === 'making-ai-agents-production-ready')!;
}
