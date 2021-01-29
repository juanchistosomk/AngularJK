//import { NgClass } from "@angular/common";
export class Pelicula {
    // 1 opcion
    /*
    public titulo:string;
    public year: number;
    public image: string;

    constructor(titulo, year, image) {
        this.titulo=titulo;
        this.year=year;
        this.image=image;        
    } */

    // 2 opcion

    constructor( 
        public titulo:string,
        public year: number,
        public image: string 
        ){}
    
}