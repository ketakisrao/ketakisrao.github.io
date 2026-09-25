import { Component, Output, EventEmitter } from '@angular/core';
import { JOURNAL_POSTS_DATA } from './blog-posts.data';

@Component({
  selector: 'app-staff-mindset-blog',
  standalone: true,
  imports: [],
  templateUrl: './staff-mindset-blog.component.html',
  styleUrl: './blog.component.css'
})
export class StaffMindsetBlogComponent {
  @Output() back = new EventEmitter<void>();
  readonly post = JOURNAL_POSTS_DATA.find(p => p.slug === 'ai-accelerating-path-to-staff-engineer')!;
}
