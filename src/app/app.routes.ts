import { Routes } from '@angular/router';
import { ProyectoPrioritarioComponent } from './proyecto-prioritario/proyecto-prioritario.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MultimediaComponent } from './multimedia/multimedia.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'proyectosPrioritarios', component: ProyectoPrioritarioComponent},
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'multimedia', component: MultimediaComponent},
    {path: '**', component: PageNotFoundComponent},
];
