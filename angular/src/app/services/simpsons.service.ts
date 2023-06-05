import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {
  baseUrl = 'http://localhost:3001';
  personajes: any = [];
  constructor(private http: HttpClient) { }

  getPersonajes() {
    this.http.get(`${this.baseUrl}/personajes`).subscribe(res => {
      this.personajes = res;
    });
  }

  getPersonaje(nombre: string) {
    const n = nombre.split(' ')[0];
    let params = new HttpParams().append('nombre', n);
    return this.http.get(`${this.baseUrl}/personaje`, { params });
  }
}
