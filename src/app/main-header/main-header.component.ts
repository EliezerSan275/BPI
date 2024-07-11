import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
  private inputSubject = new Subject<string>();
  private debounceTimeInMs = 1000; // Tiempo de espera después de que el usuario deja de escribir (en milisegundos)
  isSearchVisible = false; // Controla la visibilidad del campo de búsqueda

  constructor(private router: Router) {
    // Configura el observador para manejar los cambios de input con debounceTime
    this.inputSubject.pipe(
      debounceTime(this.debounceTimeInMs)
    ).subscribe(value => {
      this.showAlert(value);
    });
  }

  @Output() toggleDropdown = new EventEmitter<void>();

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  onToggleMenu() {
    this.toggleDropdown.emit();
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputSubject.next(input.value);
  }

  showAlert(value: string) {
    if(value != ""){
      alert(`Has escrito: ${value}`);
    }
  }

  toggleSearchVisibility() {
    this.isSearchVisible = !this.isSearchVisible;
  }
}
