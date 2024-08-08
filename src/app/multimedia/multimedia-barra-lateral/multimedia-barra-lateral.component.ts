import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multimedia-barra-lateral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multimedia-barra-lateral.component.html',
  styleUrls: ['./multimedia-barra-lateral.component.css']
})
export class MultimediaBarraLateralComponent implements OnInit {
  @Input() data: any = {}; // Acepta el JSON como Input
  @Output() fileSelection = new EventEmitter<{ level1: string, level2: string, level3: string }>();

  selectedItem: { level1: string | null, level2: string | null, level3: string | null } = {
    level1: null,
    level2: null,
    level3: null
  };
  visibleSubItems: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
    // No se necesita la llamada a la API aquí, ya que los datos vienen de MultimediaComponent
  }

  // Helper function to get the keys of an object
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // Toggle visibility of subitems
  toggleVisibility(key: string): void {
    this.visibleSubItems[key] = !this.visibleSubItems[key];
  }

  // Get the visibility state of subitems
  isVisible(key: string): boolean {
    return this.visibleSubItems[key] !== false;
  }

  // Emit the file selection event and update the selected item
  onFileSelect(level1: string, level2: string, level3: string): void {
    this.selectedItem = { level1, level2, level3 };
    this.fileSelection.emit({ level1, level2, level3 });
  }

  // Check if the item is the currently selected item
  isSelected(level1: string, level2: string, level3: string): boolean {
    return this.selectedItem.level1 === level1 &&
      this.selectedItem.level2 === level2 &&
      this.selectedItem.level3 === level3;
  }
}
