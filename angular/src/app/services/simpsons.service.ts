import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {
  baseUrl = 'http://localhost:3001';   //  es la url de nodejs en este caso lo estamos corriendo en nuestra maquina por eso es localhost
  personajes: any = [];
  constructor(private http: HttpClient) { } // aqui inyectamos la dependencia de htttp client que es la que nos permite hacer los request

  getPersonajes() {
    this.http.get(`${this.baseUrl}/personajes`).subscribe(res => { // esta llamada es la que trae la lista de personajes que mostramos en select
      this.personajes = res;
    });
  }

  getPersonaje(nombre: string) {
    let params = new HttpParams().append('nombre', nombre); //esta llamada es la que trae el personaje que el usuario eligio de las opciones del select, mandando como parametro el nombre de personaje
    return this.http.get(`${this.baseUrl}/personaje`, { params });
  }
}//lo de arriba llama a node 
