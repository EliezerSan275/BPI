import { Component, Input } from '@angular/core';
import { MenubuttonComponent } from "../menubutton/menubutton.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [MenubuttonComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menuVisible!: boolean;
}
