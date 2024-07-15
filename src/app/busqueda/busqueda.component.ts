import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  gridCards: any;
  ruta: any;
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  toggleOption(option: string, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const checked = inputElement.checked;
  
    if (checked) {
      console.log('Opción seleccionada:', option);
    } else {
    }
  }
  


  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.ruta = this.dataService.getData2();
    this.gridCards = this.dataService.getData();
    if (!this.gridCards) {
      console.error('No se recibieron datos de gridCards');
      this.gridCards = { gridCards: [] };
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
