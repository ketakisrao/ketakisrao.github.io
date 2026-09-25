import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-staff-mindset-blog',
  standalone: true,
  imports: [],
  templateUrl: './staff-mindset-blog.component.html',
  styleUrl: './blog.component.css'
})
export class StaffMindsetBlogComponent {
  @Output() back = new EventEmitter<void>();
}
