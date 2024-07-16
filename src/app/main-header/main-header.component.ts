import { Component, EventEmitter, Output, Input, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component'; // Importa el componente MenuComponent
import { DataService } from '../data.service';

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
  dropdownOpen: boolean = false;

  constructor(private router: Router, private dataService: DataService) {}

  navigateTo(route: string, ruta: string) {
    if (ruta === 'EN PROCESOS') {
      this.dataService.setData(ruta);
    } else if (ruta === 'FINALIZADOS') {
      this.dataService.setData(ruta);
    } else if (ruta === 'CANCELADOS') {
      this.dataService.setData(ruta);
    }
    this.router.navigate([route]);
    this.dropdownOpen = false; // Cierra el dropdown después de navegar
  }

  onToggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  toggleDropdown2(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleDropdown() {
    this.menuVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.dropdownOpen) {
      this.dropdownOpen = false;
    }
  }

  onHeaderClick(event: Event) {
    event.stopPropagation();
  }
}
