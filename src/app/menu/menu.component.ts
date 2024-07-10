import { Component, Input } from '@angular/core';
import { MenubuttonComponent } from "../menubutton/menubutton.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalServices } from '../global-Services';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [MenubuttonComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Input() menuVisible!: boolean;

  constructor(private router: Router, private global:GlobalServices) {}

  navigateTo() {
    this.router.navigate([this.global.getBeforeScreen()]);
  }
}
