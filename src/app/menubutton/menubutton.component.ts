import { Component, Input, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'menubutton',
  standalone: true,
  templateUrl: './menubutton.component.html',
  styleUrls: ['./menubutton.component.css']
})
export class MenubuttonComponent {
  @Input() textButton!: string;
  @Input() ruta!: string;

  private router: Router;
  private dataService: DataService;

  constructor(private injector: Injector) {
    this.router = this.injector.get(Router);
    this.dataService = this.injector.get(DataService);
  }

  navigateTo(route: string) {
    console.log('Navigating to:', route); // Verifica que la ruta es correcta
    this.router.navigate([route]);
  }
  
}
