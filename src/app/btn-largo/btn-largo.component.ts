import { Component,  Input} from '@angular/core';

@Component({
  selector: 'app-btn-largo',
  standalone: true,
  imports: [],
  templateUrl: './btn-largo.component.html',
  styleUrl: './btn-largo.component.css'
})
export class BtnLargoComponent {
  @Input() btnTexto: string | undefined;
}
