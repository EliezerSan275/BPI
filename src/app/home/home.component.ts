import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProyectoPrioritarioComponent } from '../proyecto-prioritario/proyecto-prioritario.component';
import { BtnLargoComponent } from '../btn-largo/btn-largo.component';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            ProyectoPrioritarioComponent, 
            BtnLargoComponent,
            RouterLink,
            BusquedaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  numerodeProyectos = 5;


  gridCards1 = {
    "gridCards": [
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "PROYECTOS : XY5",
        "numberProyect": "COMPAÑIA N5"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      },
      {
        "nameCompany": "STARBUCKS",
        "numberContract": "CONTRATOS: XY",
        "numberProyect": "PROTECTOS: YX"
      }
    ]
  };
  
  gridCards2 = {
    "gridCards": [
      {
        "nameCompany": "CONTRATO N1",
        "numberContract": "PROYECTOS : XY1",
        "numberProyect": "COMPAÑIA N1"
      },
      {
        "nameCompany": "CONTRATO N2",
        "numberContract": "PROYECTOS : XY2",
        "numberProyect": "COMPAÑIA N2"
      },
      {
        "nameCompany": "CONTRATO N3",
        "numberContract": "PROYECTOS : XY3",
        "numberProyect": "COMPAÑIA N3"
      },
      {
        "nameCompany": "CONTRATO N4",
        "numberContract": "PROYECTOS : XY4",
        "numberProyect": "COMPAÑIA N4"
      },
      {
        "nameCompany": "CONTRATO N5",
        "numberContract": "PROYECTOS : XY5",
        "numberProyect": "COMPAÑIA N5"
      },
      {
        "nameCompany": "CONTRATO N6",
        "numberContract": "PROYECTOS : XY6",
        "numberProyect": "COMPAÑIA N6"
      },
      {
        "nameCompany": "CONTRATO N7",
        "numberContract": "PROYECTOS : XY7",
        "numberProyect": "COMPAÑIA N7"
      },
      {
        "nameCompany": "CONTRATO N8",
        "numberContract": "PROYECTOS : XY8",
        "numberProyect": "COMPAÑIA N8"
      },
      {
        "nameCompany": "CONTRATO N9",
        "numberContract": "PROYECTOS : XY9",
        "numberProyect": "COMPAÑIA N9"
      },
      {
        "nameCompany": "CONTRATO N10",
        "numberContract": "PROYECTOS : XY10",
        "numberProyect": "COMPAÑIA N10"
      }
    ]
  };

  txtBtnPrincipales = ['COMPAÑÍAS', 'CONTRATOS', 'PROYECTOS'];
  showMainContent = true;

  constructor(private router: Router, private dataService: DataService) {}

  navigateTo(route: string, ruta: string) {
    this.dataService.setData2(ruta);
    if(ruta == 'COMPAÑIAS'){
      this.dataService.setData(this.gridCards1);
      this.router.navigate([route]);
    }else if(ruta == 'CONTRATOS'){
      this.dataService.setData(this.gridCards2);
      this.router.navigate([route]);
    }else{
      this.dataService.setData(this.gridCards2);
      this.router.navigate([route]);
    }
  }
}
