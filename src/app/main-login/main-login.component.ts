import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

declare const feather: any;

@Component({
  selector: 'app-main-login',
  standalone: true,
  // imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    feather.replace();

    // Substitui ícones feather
    if (typeof feather !== 'undefined') {
      feather.replace();
    }

    // Toggle do sidebar
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function () {
        document.body.classList.toggle('collapsed-sidebar');

        // Alternar o ícone do botão
        const icon = this.querySelector('i');
        if (icon) {
          if (document.body.classList.contains('collapsed-sidebar')) {
            icon.setAttribute('data-feather', 'chevron-right');
          } else {
            icon.setAttribute('data-feather', 'chevron-left');
          }
          if (typeof feather !== 'undefined') {
            feather.replace();
          }
        }
      });
    }

    // Funcionalidade para telas móveis
    const mobileToggleBtn = document.querySelector('.mobile-toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    if (mobileToggleBtn && sidebar) {
      mobileToggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
      });
    }
  }
}
