import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../service/serviceSkill/skill-service';
import { ServiceInfo } from '../../service/serviceInfomation/service-info';
import { Experiences } from '../../service/serviceExp/experiences';
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
  skills : any  =[]; // Initialize skills as an empty array  
  info : any = []; // Initialize info as an empty object
  experiences: any = {}; // Initialize experiences as an empty array
  constructor(
    private skillService: SkillService,
    private infoService: ServiceInfo,// Assuming you want to use ServiceInfo as well
    private experienceService: Experiences // Assuming you want to use ServiceInfo for experiences
  ) {
    this.getSkills();
    this.getInfomation(); // Fetch Infomation when the component is initialized
    this.getExperiences(); // Fetch experiences when the component is initialized
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

  getSkills() {
    this.skillService.getAllSkills().subscribe({
      next: (res) => {
        this.skills = res;
        console.log('Skills fetched successfully:', this.skills);
      },
      error: (err) => {
        console.error('Error fetching skills:', err);
      }
    });
  }
  getInfomation(){
    this.infoService.getServiceInfo().subscribe({
      next: (res) => {
        this.info = res.information;
        console.log('Service information fetched successfully:', this.info);
      },
      error: (err) => {
        console.error('Error fetching service information:', err);
      }
    });
  }

  getExperiences() {
    this.experienceService.getAllExperiences().subscribe({
      next: (res) => {
        this.experiences = res.experiences;
        console.log('Experiences fetched successfully:', this.experiences);
      },
      error: (err) => {
        console.error('Error fetching experiences:', err);
      }
    });
  }

}

function onWindowScroll() {
  throw new Error('Function not implemented.');
}

