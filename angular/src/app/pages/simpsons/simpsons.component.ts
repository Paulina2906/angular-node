import { Component } from '@angular/core';
import { SimpsonsService } from '../../services/simpsons.service';  

@Component({
  selector: 'app-simpsons',
  templateUrl: './simpsons.component.html',
  styleUrls: ['./simpsons.component.scss']
})
export class SimpsonsComponent {
  personaje: any = null;
  constructor(public simpsonsService: SimpsonsService) {}

  actualizar(ev: any) {
    this.simpsonsService.getPersonaje(ev.value).subscribe((res: any) => {
      this.personaje = res.result;
    })
  }
}
