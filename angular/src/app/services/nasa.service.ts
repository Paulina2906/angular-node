import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }//inyectamos la dependencia que nos permite hacer los request

  getImage(date: string) {//esta llamada obtiene las fotos tomadas en la fecha seleccionada y se requiere mandar como parametro la fecha, ademas del API key
    return this.http.get(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=e5dgGUo055iohigAgms0SQ5elSluw3x7Lr4lwLPh`);
  }
}
