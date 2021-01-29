import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
// Importa el modelo
import { Pelicula } from '../../models/pelicula';
// Servicio
import { PeliculaService } from '../../services/pelicula.service';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  // se añade el servicio
  providers: [PeliculaService]
})
export class PruebaComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  //public peliculas: Array<any>;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;
  
  constructor( private _peliculaService : PeliculaService ) { 
    
    this.titulo="Peliculas";
    this.peliculas= _peliculaService.peliculas
    this.fecha = new Date();
    this.peliculas=this._peliculaService.getPeliculas();
    /*
    this.peliculas=[
      { year: 2009, titulo: 'Spiderman 3', image:'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/33973.jpg'},
      { year: 2018, titulo: 'Avengers Endgame', image:'https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1556292830701-LR849KLULMTLSWOSGSX0/ke17ZwdGBToddI8pDm48kFdj1LU3QXNrC7XCDJRXSjl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1US_GH6w34F4AbXQYP1mTMh6WZrJMPe9RIQ00FIMO_YvQxJ-BQGo94klLBA8TVf45lA/Avengers-Endgame-Film-Review.jpg'},
      { year: 2019, titulo: 'Wonderwoman', image:'https://static2.abc.es/media/play/2020/11/20/wonder-woman-kAiG--620x349@abc.jpg'},
      { year: 2017, titulo: 'Batman vs Superman', image:'https://i.blogs.es/503736/batman-v-superman-la-pelicula-2016-imagen-blogdecine/1366_2000.jpg'},
      { year: 2018, titulo: 'Deadpool', image:'https://img.unocero.com/2016/12/deadpool.jpg'}
    ]; */

    //console.log("Se ejecuto el Constructor");
  }

  ngOnInit(): void{
    console.log("Componente iniciado");
    console.log(this._peliculaService.HolaMundo());
  }

  ngDoCheck(): void{
    console.log("Se ejecuto el HOOK: OnDoCheck");
  }

  /* cambiarTitulo(){
    this.titulo="El titulo ha sido cambiado";
  } */

  ngOnDestroy(): void{
    console.log("Se ejecuto el HOOK: onDestroy");
  } 

  mostrarFavorita(event){
      this.favorita=event.pelicula;
  }


}
