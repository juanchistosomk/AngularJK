import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';  

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit {

@Input() pelicula: Pelicula; 
//  Enviar datos desde el Hijo al Padre   
@Output() MarcarFavorito = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

seleccionar(event, pelicula){
  //console.log(pelicula);
  // Pasa los datos mediante el evento Output
  this.MarcarFavorito.emit({
    pelicula: pelicula
  });
}


}
