import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'container-card',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.css'
})
export class ContainerCardComponent {

}
