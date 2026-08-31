import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deterministic-evals-blog',
  standalone: true,
  imports: [],
  templateUrl: './deterministic-evals-blog.component.html',
  styleUrl: './blog.component.css'
})
export class DeterministicEvalsBlogComponent {
  @Output() back = new EventEmitter<void>();
}
