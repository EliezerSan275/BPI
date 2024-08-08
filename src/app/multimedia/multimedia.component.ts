import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MultimediaContentComponent } from './multimedia-content/multimedia-content.component';
import { MultimediaBarraLateralComponent } from './multimedia-barra-lateral/multimedia-barra-lateral.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    MultimediaContentComponent,
    MultimediaBarraLateralComponent],
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {
  data: any = {}; // Variable para almacenar el JSON
  selectedFile: { level1: string, level2: string, level3: string } = { level1: '', level2: '', level3: '' };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://siap.ddns.net:8081/ws/front/guardarImagenes/ficheros.php')
      .subscribe(
        response => {
          this.data = response; // Guardar el JSON en la variable
          console.log('JSON Data:', this.data); // Imprimir en la consola para verificar
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  onFileSelection(fileSelection: { level1: string, level2: string, level3: string }) {
    this.selectedFile = fileSelection;
    console.log('File Selection:', this.selectedFile); // Verificar la selección de archivo
  }
}
