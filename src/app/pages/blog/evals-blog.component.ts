import { Component, Output, EventEmitter } from '@angular/core';
import { JOURNAL_POSTS_DATA } from './blog-posts.data';

@Component({
  selector: 'app-evals-blog',
  standalone: true,
  imports: [],
  templateUrl: './evals-blog.component.html',
  styleUrl: './blog.component.css'
})
export class EvalsBlogComponent {
  @Output() back = new EventEmitter<void>();
  readonly post = JOURNAL_POSTS_DATA.find(p => p.slug === 'evals-not-an-afterthought')!;
}
