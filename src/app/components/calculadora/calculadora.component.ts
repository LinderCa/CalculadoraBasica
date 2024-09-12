import { Component } from '@angular/core';
import { PantallaComponent } from "./pantalla/pantalla.component";
import { TeclaComponent } from "./tecla/tecla.component";
import { TeclaNumericaComponent } from "./tecla/tecla-numerica/tecla-numerica.component";
import { TeclaOperadorComponent } from './tecla/tecla-operador/tecla-operador.component';
import { FilaComponent } from "../fila/fila.component";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [PantallaComponent, TeclaComponent, TeclaNumericaComponent, TeclaOperadorComponent, FilaComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  //PROPIEDADES
  cadena_operacion:string="";
  operador:string="";
  resultado:number=0;

  //Arreglos de operadores
  operadores:string[]=['--','+','-','*','/','%'];
  //Arreglo de Numeros
  numeros:number[]=[0,1,2,3,4,5,6,7,8,9];

  mostrarNumerico(value:number){
    //console.log("El valor es: ",value);
    this.mostrarPantalla(value);
  }
  mostrarOperador(value:string){
    //console.log("El oeprador es: ",value);
    this.mostrarPantalla(value);
  }

  mostrarPantalla(value:number | string){
    if(typeof(value)==="number"){
      console.log("El valor digitado es numerico",value);
      //Lo convertimos a string
      this.cadena_operacion+=`${value}`;
      console.log("La cadena se ve asi: ",this.cadena_operacion);
    }else{
      //Verificamos que se registre un solo operador entre dos operandos
      if(this.isOperador(this.cadena_operacion)){
        //Reemplzamos con el valor dado
        this.cadena_operacion=this.cadena_operacion.slice(0, -1) + value;
        console.log("La nueva cadena es: ",this.cadena_operacion);
      }else
        this.cadena_operacion+=value;
    }
  }

  limpiarPantalla(){
    this.cadena_operacion="0";
  }

  calcularResultado(){
    this.resultado=this.evaluarExpresion(this.cadena_operacion);
    //limpiamos pantalla
    this.limpiarPantalla();
    this.cadena_operacion=this.resultado+"";
  }

  private isOperador(cadena:string){
    console.log("------------------------------");
    console.log("LA cadena de operacion: ",cadena);
    let estado=false;
    let ultimo_caracter:string="";

    //Sacamos el ultimo carecter d  e la cadena
    ultimo_caracter=cadena.charAt(cadena.length-1);
    console.log("El ultimo caracter de la cadena es: ",ultimo_caracter);

    //REcorremos
    estado=this.operadores.some(simbolo => simbolo===ultimo_caracter);
    console.log("el estado es: ",estado);
    return estado;
  }

  private evaluarExpresion(expresion: string): number {
    // Primero resolvemos multiplicaciones, divisiones y módulos
    expresion = expresion.replace(/(\d+)([*\/%])(\d+)/g, (match, num1, oper, num2) => {
      let resultado: number=0;
      let n1 = parseFloat(num1);
      let n2 = parseFloat(num2);

      switch (oper) {
        case '*':
          resultado = n1 * n2;
          break;
        case '/':
          resultado = n1 / n2;
          break;
        case '%':
          resultado = n1 % n2;
          break;
      }
      return resultado.toString();
    });

    // Luego resolvemos sumas y restas
    return expresion.split(/(?=\+|-)/).reduce((acc, curr) => acc + parseFloat(curr), 2);
  }
}
