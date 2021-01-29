import { Component } from '@angular/core';

@Component ({
    selector: 'mi-primer-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

 public nombre : string;
 public titulo : string;
 public ano : number;
 public mostrarPrueba : boolean;

 constructor(){
    this.nombre="Juan Karlitos";
    this.titulo="Angular";
    this.ano=2021;
    this.mostrarPrueba=true;

    console.log("Comprobando componente nuevo");
    console.log(this.nombre, this.titulo, this.ano);
 }

 ocultarPrueba() {
     this.mostrarPrueba=false;
 } 

}