import { Component, Input, OnInit, output, ViewChild } from '@angular/core';
import { TeclaComponent } from '../tecla.component';

@Component({
  selector: 'app-tecla-numerica',
  standalone: true,
  imports: [],
  templateUrl: './tecla-numerica.component.html',
  styleUrl: './tecla-numerica.component.css',
  inputs: ['contenido'] //Insertamos el input de la clase base
})
export class TeclaNumericaComponent extends TeclaComponent{
  //Propiedades
  salidaNumerica=output<number>();  //Definimos una propiedad de salida mediante una funcion de evento


  //MEtodos
  emitirNumero(value:number){
    //Emitimos una salida
    this.salidaNumerica.emit(value);
  }
}
