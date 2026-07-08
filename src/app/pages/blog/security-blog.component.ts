import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-security-blog',
  standalone: true,
  imports: [],
  templateUrl: './security-blog.component.html',
  styleUrl: './blog.component.css'
})
export class SecurityBlogComponent {
  @Output() back = new EventEmitter<void>();
}
