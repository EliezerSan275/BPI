import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contratos',
  standalone: true,
  imports: [
    CardComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css'
})
export class ContratosComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
