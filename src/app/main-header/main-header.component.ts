import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  isSearchVisible = false; // Controla la visibilidad del campo de búsqueda

  constructor(private router: Router) {}

  @Output() toggleDropdown = new EventEmitter<void>();

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  onToggleMenu() {
    this.toggleDropdown.emit();
  }

}
