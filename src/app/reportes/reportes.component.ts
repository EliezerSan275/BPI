import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterOutlet,
    RouterLink],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  encabezado: any;
  dropdownOpen = false;
  reportes = [
    {
        no: 67,
        tipo: 'a',
        contrato: '640852806',
        compania: 'DEMAR',
        obra: 'GSD de BN 16”Ø x 20 Km Yaxché-A hacia Tlacame-A',
        fechaInicio: '01-abr-22',
        lpoContractual: '22-may-23',
        realPronostico: '01-jul-24',
        avProg: 100,
        avReal: 90.2,
        clasificacion: 'Marina'
    },
    {
        no: 68,
        tipo: 'b',
        contrato: '640852862',
        compania: 'BICENTENARIO',
        obra: 'Rehabilitación de camino pavimentado tramo Cuatro Caminos Quesqui 7 Quesqui 1 Quesqui 2, Incluye: Rehabilitación de alcantarillas y pase de agua, del camino de acceso al campo Quesqui.',
        fechaInicio: '10-mar-23',
        lpoContractual: '25-ago-23',
        realPronostico: '11-jun-23',
        avProg: 100,
        avReal: 100,
        clasificacion: 'Terrestres'
    },
    {
        no: 67,
        tipo: 'a',
        contrato: '640852806',
        compania: 'DEMAR',
        obra: 'GSD de BN 16”Ø x 20 Km Yaxché-A hacia Tlacame-A',
        fechaInicio: '01-abr-22',
        lpoContractual: '22-may-23',
        realPronostico: '01-jul-24',
        avProg: 100,
        avReal: 90.2,
        clasificacion: 'Marina'
    },
    {
        no: 68,
        tipo: 'b',
        contrato: '640852862',
        compania: 'BICENTENARIO',
        obra: 'Rehabilitación de camino pavimentado tramo Cuatro Caminos Quesqui 7 Quesqui 1 Quesqui 2, Incluye: Rehabilitación de alcantarillas y pase de agua, del camino de acceso al campo Quesqui.',
        fechaInicio: '10-mar-23',
        lpoContractual: '25-ago-23',
        realPronostico: '11-jun-23',
        avProg: 100,
        avReal: 100,
        clasificacion: 'Terrestres'
    },
    {
        no: 67,
        tipo: 'a',
        contrato: '640852806',
        compania: 'DEMAR',
        obra: 'GSD de BN 16”Ø x 20 Km Yaxché-A hacia Tlacame-A',
        fechaInicio: '01-abr-22',
        lpoContractual: '22-may-23',
        realPronostico: '01-jul-24',
        avProg: 100,
        avReal: 90.2,
        clasificacion: 'Marina'
    },
    {
        no: 68,
        tipo: 'b',
        contrato: '640852862',
        compania: 'BICENTENARIO',
        obra: 'Rehabilitación de camino pavimentado tramo Cuatro Caminos Quesqui 7 Quesqui 1 Quesqui 2, Incluye: Rehabilitación de alcantarillas y pase de agua, del camino de acceso al campo Quesqui.',
        fechaInicio: '10-mar-23',
        lpoContractual: '25-ago-23',
        realPronostico: '11-jun-23',
        avProg: 100,
        avReal: 100,
        clasificacion: 'Terrestres'
    },
    {
        no: 67,
        tipo: 'a',
        contrato: '640852806',
        compania: 'DEMAR',
        obra: 'GSD de BN 16”Ø x 20 Km Yaxché-A hacia Tlacame-A',
        fechaInicio: '01-abr-22',
        lpoContractual: '22-may-23',
        realPronostico: '01-jul-24',
        avProg: 100,
        avReal: 90.2,
        clasificacion: 'Marina'
    },
    {
        no: 68,
        tipo: 'b',
        contrato: '640852862',
        compania: 'BICENTENARIO',
        obra: 'Rehabilitación de camino pavimentado tramo Cuatro Caminos Quesqui 7 Quesqui 1 Quesqui 2, Incluye: Rehabilitación de alcantarillas y pase de agua, del camino de acceso al campo Quesqui.',
        fechaInicio: '10-mar-23',
        lpoContractual: '25-ago-23',
        realPronostico: '11-jun-23',
        avProg: 100,
        avReal: 100,
        clasificacion: 'Terrestres'
    },
    {
        no: 67,
        tipo: 'a',
        contrato: '640852806',
        compania: 'DEMAR',
        obra: 'GSD de BN 16”Ø x 20 Km Yaxché-A hacia Tlacame-A',
        fechaInicio: '01-abr-22',
        lpoContractual: '22-may-23',
        realPronostico: '01-jul-24',
        avProg: 100,
        avReal: 90.2,
        clasificacion: 'Marina'
    },
    {
        no: 68,
        tipo: 'b',
        contrato: '640852862',
        compania: 'BICENTENARIO',
        obra: 'Rehabilitación de camino pavimentado tramo Cuatro Caminos Quesqui 7 Quesqui 1 Quesqui 2, Incluye: Rehabilitación de alcantarillas y pase de agua, del camino de acceso al campo Quesqui.',
        fechaInicio: '10-mar-23',
        lpoContractual: '25-ago-23',
        realPronostico: '11-jun-23',
        avProg: 100,
        avReal: 100,
        clasificacion: 'Terrestres'
    },
    {
        no: 67,
        tipo: 'a',
        contrato: '640852806',
        compania: 'DEMAR',
        obra: 'GSD de BN 16”Ø x 20 Km Yaxché-A hacia Tlacame-A',
        fechaInicio: '01-abr-22',
        lpoContractual: '22-may-23',
        realPronostico: '01-jul-24',
        avProg: 100,
        avReal: 90.2,
        clasificacion: 'Marina'
    },
    {
        no: 68,
        tipo: 'b',
        contrato: '640852862',
        compania: 'BICENTENARIO',
        obra: 'Rehabilitación de camino pavimentado tramo Cuatro Caminos Quesqui 7 Quesqui 1 Quesqui 2, Incluye: Rehabilitación de alcantarillas y pase de agua, del camino de acceso al campo Quesqui.',
        fechaInicio: '10-mar-23',
        lpoContractual: '25-ago-23',
        realPronostico: '11-jun-23',
        avProg: 100,
        avReal: 100,
        clasificacion: 'Terrestres'
    },
    {
        no: 67,
        tipo: 'a',
        contrato: '640852806',
        compania: 'DEMAR',
        obra: 'GSD de BN 16”Ø x 20 Km Yaxché-A hacia Tlacame-A',
        fechaInicio: '01-abr-22',
        lpoContractual: '22-may-23',
        realPronostico: '01-jul-24',
        avProg: 100,
        avReal: 90.2,
        clasificacion: 'Marina'
    },
    {
        no: 68,
        tipo: 'b',
        contrato: '640852862',
        compania: 'BICENTENARIO',
        obra: 'Rehabilitación de camino pavimentado tramo Cuatro Caminos Quesqui 7 Quesqui 1 Quesqui 2, Incluye: Rehabilitación de alcantarillas y pase de agua, del camino de acceso al campo Quesqui.',
        fechaInicio: '10-mar-23',
        lpoContractual: '25-ago-23',
        realPronostico: '11-jun-23',
        avProg: 100,
        avReal: 100,
        clasificacion: 'Terrestres'
    },
      // Puedes añadir más objetos aquí si necesitas más reportes
  ];

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
  
  ngOnInit(){
    this.encabezado = this.dataService.getData();
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
