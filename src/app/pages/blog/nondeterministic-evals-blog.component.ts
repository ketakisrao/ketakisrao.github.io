import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nondeterministic-evals-blog',
  standalone: true,
  imports: [],
  templateUrl: './nondeterministic-evals-blog.component.html',
  styleUrl: './blog.component.css'
})
export class NonDeterministicEvalsBlogComponent {
  @Output() back = new EventEmitter<void>();
}
