import { Component, Input } from '@angular/core';

@Component({
  selector: 'menubutton',
  standalone: true,
  imports: [],
  templateUrl: './menubutton.component.html',
  styleUrl: './menubutton.component.css'
})
export class MenubuttonComponent {
  @Input() textButton!: string;
}
