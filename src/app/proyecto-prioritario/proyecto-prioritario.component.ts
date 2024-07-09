import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-proyecto-prioritario',
  templateUrl: './proyecto-prioritario.component.html',
  styleUrls: ['./proyecto-prioritario.component.css']
})
export class ProyectoPrioritarioComponent {
  @Input() index: number = 0; // Inicializamos 'index' con un valor por defecto

  // Resto del código
  nombreProyecto = ['Nombre1', 'Nombre2', 'Nombre3', 'Nombre4', 'Nombre5'];
  estatusActividad = [0, 1, 2, 0, 0];
  fechasEntrega = ["07/07/2024", "09/07/2024", "07/07/2024", "09/07/2024", "09/07/2024"];
  estatusPorcentaje = [15, 25, 45, 78,100];

  constructor() {
    // No necesitamos hacer nada especial en el constructor ahora
  }

}
