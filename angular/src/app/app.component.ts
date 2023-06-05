import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { SimpsonsService } from './services/simpsons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  images = {
    nasa: '../assets/nasa.png',
    simpsons: '../assets/simpsons.png',
    nosotros: '../assets/simpsons.png',
  }
  constructor(public router: Router, private simpsonsService: SimpsonsService) {
    this.simpsonsService.getPersonajes();
  }


  getImage() {
    switch (this.router.url){
      case '/nasa':
        return '../assets/nasa.png'
      case '/simpsons':
        return '../assets/simpsons.png';
      case '/nosotros':
        return '../assets/uaa.png';
      default:
        return '';
    }
  }
}
