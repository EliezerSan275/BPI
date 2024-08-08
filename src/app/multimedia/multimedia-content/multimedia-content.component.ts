import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-multimedia-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multimedia-content.component.html',
  styleUrls: ['./multimedia-content.component.css']
})
export class MultimediaContentComponent implements OnChanges {
  @Input() data: any = {}; // Acepta el JSON como Input
  @Input() level1Key: string = ''; // Clave del primer nivel
  @Input() level2Key: string = ''; // Clave del segundo nivel
  @Input() level3Key: string = ''; // Clave del tercer nivel
  files: string[] = [];
  messages: { [key: string]: { hora: string, mensaje: string }[] } = {}; // Para almacenar mensajes por archivo
  fecha: string = ''; // Para almacenar la fecha

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.setDefaultValues();
    }

    if (changes['level1Key'] || changes['level2Key'] || changes['level3Key']) {
      this.updateFiles();
    }
  }

  setDefaultValues() {
    if (!this.data) {
      console.error('No data available'); // Mensaje de error si no hay datos
      return;
    }

    const level1Keys = this.getKeys(this.data);

    if (level1Keys.length > 0) {
      this.level1Key = level1Keys[0];

      const level2Keys = this.getKeys(this.data[this.level1Key]);

      if (level2Keys.length > 0) {
        this.level2Key = level2Keys[0];

        const level3Keys = this.getKeys(this.data[this.level1Key][this.level2Key]);

        if (level3Keys.length > 0) {
          this.level3Key = level3Keys[0];

          this.files = this.data[this.level1Key][this.level2Key][this.level3Key] || [];
          console.log('Files:', this.files); // Depuración
        }
      }
    }
  }

  updateFiles() {
    if (!this.data[this.level1Key] || !this.data[this.level1Key][this.level2Key] || !this.data[this.level1Key][this.level2Key][this.level3Key]) {
      this.files = [];
      return;
    }
    this.files = this.data[this.level1Key][this.level2Key][this.level3Key];

    // Inicializa el objeto messages
    this.messages = {};

    // Procesa cada archivo JSON con "mensaje" en el nombre
    this.files.forEach(fileName => {
      if (this.getFileType(fileName) === 'jsonMessage') {
        this.fetchJsonMessage(fileName).subscribe(response => {
          if (response && !response.error) {
            this.fecha = response.fecha;
            // Asignar mensajes al archivo correspondiente
            // Cada mensaje en la respuesta es un objeto separado
            this.messages[fileName] = response['datos extra']?.mensajes
              ? Object.values(response['datos extra'].mensajes) 
              : [];
          } else {
            console.error('Error en la respuesta:', response?.error);
          }
        });
      }
    });
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getFileType(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();
    const baseName = fileName.split('.').slice(0, -1).join('.').toLowerCase();
    
    if (extension === 'jpg' || extension === 'png' || extension === 'jpeg') {
      return 'image';
    } else if (extension === 'mp4') {
      return 'video';
    } else if (extension === 'pdf') {
      return 'pdf';
    } else if (extension === 'json' && baseName.includes('mensaje')) {
      return 'jsonMessage';
    } else {
      return 'other';
    }
  }

  getFileNameWithoutExtension(fileName: string): string {
    const parts = fileName.split('.');
    if (parts.length > 1) {
      parts.pop(); // Elimina la extensión
    }
    return parts.join('.');
  }
  
  getFileUrl(level1: string, level2: string, level3: string, fileName: string): string {
    return `http://siap.ddns.net:8081/ws/front/guardarImagenes/guardado/${level1}/${level2}/${level3}/${fileName}`;
  }

  getFileExtension(fileName: string): string {
    return (fileName.split('.').pop() || '').toUpperCase();
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  fetchJsonMessage(fileName: string): Observable<any> {
    const url = `http://siap.ddns.net:8081/ws/front/guardarImagenes/obtener_json.php`;
    const fileUrl = `/guardado/${this.level1Key}/${this.level2Key}/${this.level3Key}/`;
  
    return this.http.get<any>(url, {
      params: {
        file: fileName,
        directory: fileUrl
      },
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    }).pipe(
      tap(response => {
        console.log('Response:', response);
        if (response && response['datos extra'] && response['datos extra'].mensajes) {
          // Asegúrate de que estamos asignando un array de objetos
          this.messages[fileName] = Object.values(response['datos extra'].mensajes);
          console.log('Messages:', this.messages[fileName]);
        } else {
          console.error('Estructura de respuesta inesperada:', response);
          this.messages[fileName] = [];
        }
      }),
      catchError(error => {
        console.error('Error:', error);
        return of(null);
      })
    );
  }

  getMessagesFromFile(fileName: string): { hora: string, mensaje: string }[] {
    return this.messages[fileName] || [];
  }
  
}
