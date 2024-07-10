import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Proporciona el servicio en el ámbito global de la aplicación
})
export class GlobalServices {
  globalVariable: string = ''; // Ejemplo de variable global

  constructor() { }

  // Métodos para acceder y modificar la variable global si es necesario
  setBeforeScreen(value: string) {
    this.globalVariable = value;
  }

  getBeforeScreen(): string {
    return this.globalVariable;
  }
}