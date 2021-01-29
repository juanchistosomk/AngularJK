// SERVICIO EN ANGULAR

import { Injectable } from '@angular/core';
import { Pelicula } from '../../app/models/pelicula';

@Injectable()

export class PeliculaService {

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula('Spiderman 3', 2009, 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/33973.jpg'),
            new Pelicula('Avengers Endgame', 2018, 'https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1556292830701-LR849KLULMTLSWOSGSX0/ke17ZwdGBToddI8pDm48kFdj1LU3QXNrC7XCDJRXSjl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1US_GH6w34F4AbXQYP1mTMh6WZrJMPe9RIQ00FIMO_YvQxJ-BQGo94klLBA8TVf45lA/Avengers-Endgame-Film-Review.jpg'),
            new Pelicula('Wonderwoman', 2019, 'https://static2.abc.es/media/play/2020/11/20/wonder-woman-kAiG--620x349@abc.jpg'),
            new Pelicula('Batman vs Superman', 2017, 'https://i.blogs.es/503736/batman-v-superman-la-pelicula-2016-imagen-blogdecine/1366_2000.jpg'),
            new Pelicula('Deadpool', 2018, 'https://img.unocero.com/2016/12/deadpool.jpg' )
          ];
    }

    HolaMundo(){
        return 'Hola Mundo desde Service Angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}