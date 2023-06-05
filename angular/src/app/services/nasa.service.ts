import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  baseUrl = '';
  constructor(private http: HttpClient) { }

  getImage(date: string) {
    let params = new HttpParams().append('date', date);
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=e5dgGUo055iohigAgms0SQ5elSluw3x7Lr4lwLPh');
  }
}
