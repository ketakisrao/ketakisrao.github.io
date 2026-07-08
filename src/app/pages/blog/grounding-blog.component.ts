import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grounding-blog',
  standalone: true,
  imports: [],
  templateUrl: './grounding-blog.component.html',
  styleUrl: './blog.component.css'
})
export class GroundingBlogComponent {
  @Output() back = new EventEmitter<void>();
}
