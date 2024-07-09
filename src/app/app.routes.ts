import { Routes } from '@angular/router';
import { ProyectoPrioritarioComponent } from './proyecto-prioritario/proyecto-prioritario.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContainerCardComponent } from './container-card/container-card.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'proyectosPrioritarios', component: ProyectoPrioritarioComponent},
    {path: '**', component: PageNotFoundComponent},
    {path: 'compani', component: ContainerCardComponent},
    {path: 'menu', component: MenuComponent},
];
