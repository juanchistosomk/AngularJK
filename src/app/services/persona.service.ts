import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  _url="http://127.0.0.1:9000/api";

  constructor(private http: HttpClient) {
    console.log('Servicio persona ejecutandose');
   }

   getPersona(){
      let header = new HttpHeaders().set('Type-content','application/json');
        return this.http.get(this._url, {
          headers : header
        })
   }
}
