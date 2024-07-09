import { Component } from '@angular/core';
import { MenubuttonComponent } from "../menubutton/menubutton.component";

@Component({
  selector: 'menu',
  standalone: true,
  imports: [MenubuttonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
