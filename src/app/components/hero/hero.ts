import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedTitle = '';
  private titles = [
    'Lead Full Stack Engineer',
    'Distributed Microservices Architect',
    'Java & Spring Boot Specialist',
    'Cloud & DevOps Engineer (GCP / AWS)',
    'Angular & Modern Frontend Lead'
  ];
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private startTypewriter(): void {
    const current = this.titles[this.titleIndex];
    const speed = this.isDeleting ? 35 : 75;

    if (!this.isDeleting && this.charIndex <= current.length) {
      this.displayedTitle = current.substring(0, this.charIndex++);
    } else if (this.isDeleting && this.charIndex >= 0) {
      this.displayedTitle = current.substring(0, this.charIndex--);
    }

    if (!this.isDeleting && this.charIndex > current.length) {
      this.isDeleting = true;
      this.timer = setTimeout(() => this.startTypewriter(), 2200);
      return;
    }

    if (this.isDeleting && this.charIndex < 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.charIndex = 0;
      this.timer = setTimeout(() => this.startTypewriter(), 400);
      return;
    }

    this.timer = setTimeout(() => this.startTypewriter(), speed);
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
