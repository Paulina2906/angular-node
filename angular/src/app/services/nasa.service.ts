import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  baseUrl = '';
  constructor(private http: HttpClient) { }

  getImage(date: string) {
    return this.http.get(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=e5dgGUo055iohigAgms0SQ5elSluw3x7Lr4lwLPh`);
  }
}
