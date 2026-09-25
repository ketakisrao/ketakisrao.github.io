import { Component, Output, EventEmitter } from '@angular/core';
import { JOURNAL_POSTS_DATA } from './blog-posts.data';

@Component({
  selector: 'app-security-blog',
  standalone: true,
  imports: [],
  templateUrl: './security-blog.component.html',
  styleUrl: './blog.component.css'
})
export class SecurityBlogComponent {
  @Output() back = new EventEmitter<void>();
  readonly post = JOURNAL_POSTS_DATA.find(p => p.slug === 'securing-the-prompt-beginner-guide')!;
}
