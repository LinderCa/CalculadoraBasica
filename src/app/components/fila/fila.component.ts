import { Component, ContentChild, ViewChild } from '@angular/core';
import { TeclaComponent } from '../calculadora/tecla/tecla.component';
import { TeclaOperadorComponent } from '../calculadora/tecla/tecla-operador/tecla-operador.component';

@Component({
  selector: 'app-fila',
  standalone: true,
  imports: [],
  //Utilizamos proyeccion de contenido
  template: `
    <div class="grid grid-cols-4 gap-2 justify-items-center py-2">
      <ng-content/>
    </div>
  `,
  styleUrl: './fila.component.css'
})
export class FilaComponent {
}
