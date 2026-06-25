import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Mouse position signals for parallax effect on organic background shapes
  mouseX = signal(0);
  mouseY = signal(0);

  // Computations for smooth translation styles
  shape1Transform = computed(() => {
    const x = this.mouseX() * 15;
    const y = this.mouseY() * 15;
    return `translate(${x}px, ${y}px)`;
  });

  shape2Transform = computed(() => {
    const x = this.mouseX() * -25;
    const y = this.mouseY() * -25;
    return `translate(${x}px, ${y}px)`;
  });

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Normalize coordinates between -0.5 and 0.5
    const normX = (event.clientX / window.innerWidth) - 0.5;
    const normY = (event.clientY / window.innerHeight) - 0.5;
    this.mouseX.set(normX);
    this.mouseY.set(normY);
  }

  // Value cards progressive disclosure active states
  activePhilosophyCard = signal<number | null>(null);

  togglePhilosophyCard(cardIndex: number) {
    if (this.activePhilosophyCard() === cardIndex) {
      this.activePhilosophyCard.set(null);
    } else {
      this.activePhilosophyCard.set(cardIndex);
    }
  }
}
