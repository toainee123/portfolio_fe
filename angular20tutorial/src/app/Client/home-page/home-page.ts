import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule for directives like ngIf
})
export class HomePage implements OnInit {
  showScrollToTop = false;
  activeSection = '';
  email: string | null = null;
  
  constructor() {
    // Retrieve token from localStorage
    const storedResponse = localStorage.getItem('respone');
    if (storedResponse) {
      const response = JSON.parse(storedResponse);
      this.email = response.email || null; // Extract token if available
      console.log('Token from localStorage:', this.email);
      
    }
  } 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show or hide the scroll-to-top button
    this.showScrollToTop = window.pageYOffset > 300;

    // Highlight active navigation link
    this.setActiveSection();
  }

  ngOnInit() {
    this.setupSmoothScrolling();
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id') || '';
      }
    });
    this.activeSection = currentSection;
  }
}

