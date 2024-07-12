import { Component, EventEmitter, Output, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component'; // Importa el componente MenuComponent

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MenuComponent // Añade MenuComponent a los imports
  ],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  menuVisible: boolean = false;

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  onToggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  toggleDropdown() {
    this.menuVisible = false;
  }
}