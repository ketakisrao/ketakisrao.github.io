import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evals-blog',
  standalone: true,
  imports: [],
  templateUrl: './evals-blog.component.html',
  styleUrl: './blog.component.css'
})
export class EvalsBlogComponent {
  @Output() back = new EventEmitter<void>();
}
