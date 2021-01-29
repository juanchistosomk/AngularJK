import { Component, OnInit } from '@angular/core';
// importa para permitir pasar variables por la URL
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellido: string;

  constructor(private _route: ActivatedRoute, private _router: Router) { 
    
  }

  ngOnInit(): void {
    // _route Captura el valor de la URL de las variables y la asigna
      this._route.params.subscribe((params: Params) => {
         this.nombre=params.nombre;
         this.apellido=params.apellido;
      });
     
  }

  // Redireccionar con _router
  redireccionar(){
    this._router.navigate(['/pagina-de-prueba', 'Juan', 'Castillo']);
  }

}
