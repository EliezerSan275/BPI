import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'container-card',
  standalone: true,
  imports: [
    CardComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.css'
})
export class ContainerCardComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
