import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pantalla',
  standalone: true,
  imports: [],
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.css'
})
export class PantallaComponent {
  //Propiedades
  @Input() entradas:string="";
}
