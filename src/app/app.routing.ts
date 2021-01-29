// Importar modulos Routing de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes para hacerles una pagina independiente

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PruebaComponent } from './components/prueba/prueba.component'; 
import { ErrorComponent } from './components/error/error.component';

// Array de rutas
const appRoutes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
                            // se repite la ruta para que acepte o no variables
    { path: 'pagina-de-prueba', component: PaginaComponent },
                            //  /:variable  = se vuelve obligatorio el dato
    { path: 'pagina-de-prueba/:nombre/:apellido', component: PaginaComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'prueba', component: PruebaComponent},
    { path: '**', component: ErrorComponent }
];

//Exportar modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>  = RouterModule.forRoot(appRoutes);