import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tecla',
  standalone: true,
  imports: [],
  template: '<div></div>',
})
export class TeclaComponent {
  //Antes de que se asigne realiza una transformacion
  @Input() contenido:number=0;
  @Input() contenidoOperador:string='';

  //METODOS

}
