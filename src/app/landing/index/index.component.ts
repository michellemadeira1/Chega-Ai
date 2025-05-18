import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Menu toggle para mobile
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    });

    // Smooth scrolling para links internos
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();

        const targetId = anchor.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });

          // Fechar menu mobile se estiver aberto
          if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
          }
        }
      });
    });
  }
}
