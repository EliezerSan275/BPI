import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProyectoPrioritarioComponent } from '../proyecto-prioritario/proyecto-prioritario.component';
import { BtnLargoComponent } from '../btn-largo/btn-largo.component';
import { CompaniComponent } from '../compani/compani.component';
import { GlobalServices } from '../global-Services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            ProyectoPrioritarioComponent, 
            BtnLargoComponent,
            RouterLink,
          CompaniComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  numerodeProyectos =5;

  
  txtBtnPrincipales = ['COMPAÑÍAS', 'CONTRATOS', 'PROYECTOS'];

  showMainContent = true; // Controla la visibilidad del contenido principal

  constructor(private router: Router, private global: GlobalServices) {}

  navigateTo(route: string) {
    this.global.setBeforeScreen(route);
    this.router.navigate([route]);
  }


}
