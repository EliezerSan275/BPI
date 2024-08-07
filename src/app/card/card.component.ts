import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() nameCompany!: string;
  @Input() numberContract!: string;
  @Input() numberProyect!: string;
}
