import { Component, output } from '@angular/core';
import { TeclaComponent } from '../tecla.component';

@Component({
  selector: 'app-tecla-operador',
  standalone: true,
  imports: [],
  templateUrl: './tecla-operador.component.html',
  styleUrl: './tecla-operador.component.css',
  inputs:['contenidoOperador']
})
export class TeclaOperadorComponent extends TeclaComponent{
  //Generamos una funcion de salida
  salidaOperador=output<string>();

  emitirOperador(value:string){
    this.salidaOperador.emit(value);
  }
}
