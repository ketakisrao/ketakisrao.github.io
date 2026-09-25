import { Component, HostListener, signal, computed, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SKILL_PILLARS_DATA, SkillPillar, SkillDetail } from './skills-quadrants.data';

interface AmbientParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ambientCanvas', { static: false }) ambientCanvasRef?: ElementRef<HTMLCanvasElement>;

  // Mouse position signals for subtle parallax effect
  mouseX = signal(0);
  mouseY = signal(0);

  // Computations for smooth translation styles on hero background
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

  // --- Segmented Matrix Studio State (Option 2) ---
  pillars = signal<SkillPillar[]>(SKILL_PILLARS_DATA);
  activePillarId = signal<string>('ai-agentic');

  activePillar = computed(() => {
    return this.pillars().find(p => p.id === this.activePillarId()) ?? this.pillars()[0];
  });

  selectPillar(pillarId: string): void {
    this.activePillarId.set(pillarId);
  }

  // Canvas animation fields
  private animFrameId: number | null = null;
  private particles: AmbientParticle[] = [];
  private canvasWidth = 0;
  private canvasHeight = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const normX = (event.clientX / window.innerWidth) - 0.5;
    const normY = (event.clientY / window.innerHeight) - 0.5;
    this.mouseX.set(normX);
    this.mouseY.set(normY);
  }

  ngAfterViewInit(): void {
    this.initAmbientCanvas();
  }

  ngOnDestroy(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
  }



  // --- Creative Ambient Backdrop Canvas ---
  private initAmbientCanvas(): void {
    if (!this.ambientCanvasRef) return;
    const canvas = this.ambientCanvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      this.canvasWidth = parent.clientWidth;
      this.canvasHeight = parent.clientHeight;
      canvas.width = this.canvasWidth * window.devicePixelRatio;
      canvas.height = this.canvasHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Seed 28 floating ambient particles
    this.particles = [];
    const count = 28;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.75 + 1,
        alpha: Math.random() * 0.25 + 0.1,
        baseAlpha: Math.random() * 0.25 + 0.1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

      // Draw particle nodes
      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = this.canvasWidth;
        if (p.x > this.canvasWidth) p.x = 0;
        if (p.y < 0) p.y = this.canvasHeight;
        if (p.y > this.canvasHeight) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(185, 205, 164, ${p.alpha})`;
        ctx.fill();
      }

      // Draw faint connections between nearby particles
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.08;
            ctx.beginPath();
            ctx.moveTo(this.particles[i].x, this.particles[i].y);
            ctx.lineTo(this.particles[j].x, this.particles[j].y);
            ctx.strokeStyle = `rgba(185, 205, 164, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      this.animFrameId = requestAnimationFrame(render);
    };

    render();
  }
}
