import { Component, ViewChild, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-compani',
  standalone: true,
  imports: [],
  templateUrl: './compani.component.html',
  styleUrl: './compani.component.css'
})

export class CompaniComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      setTimeout(() => {
        const dropdown = document.querySelector('.dropdown-content') as HTMLElement;
        dropdown.style.display = 'block';
      }, 20); // Tiempo suficiente para iniciar la transición
    } else {
      const dropdown = document.querySelector('.dropdown-content') as HTMLElement;
      dropdown.style.display = 'none';
    }
  }
}
