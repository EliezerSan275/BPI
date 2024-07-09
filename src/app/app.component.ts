import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProyectoPrioritarioComponent } from './proyecto-prioritario/proyecto-prioritario.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { BtnLargoComponent } from './btn-largo/btn-largo.component';
import { ContainerCardComponent } from './container-card/container-card.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            ProyectoPrioritarioComponent, 
            MainHeaderComponent, 
            BtnLargoComponent,
            RouterOutlet,
            ContainerCardComponent,
            MenuComponent,
            RouterLink,
            CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BPI';
  numerodeProyectos =5;

  
  txtBtnPrincipales = ['COMPAÑÍAS', 'CONTRATOS', 'PROYECTOS'];

  showMainContent = true; // Controla la visibilidad del contenido principal

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


  //-----------------DESLIZAMIENTO DE LA BARRA LATERAL-------------------------------------
  menuVisible: boolean = false;

  toggleDropdown() {
    this.menuVisible = !this.menuVisible;
  }
}
