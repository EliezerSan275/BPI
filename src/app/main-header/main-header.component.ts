import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {

  @Output() toggleDropdown = new EventEmitter<void>();

  onToggleMenu() {
    this.toggleDropdown.emit();
  }

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
