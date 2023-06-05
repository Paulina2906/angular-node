import { Component } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent {
 
  form = new FormGroup({
    date: new FormControl()
  });
    
  constructor(private nasaService: NasaService) {}


  async search() {
    const stringDate = this.form.controls.date.getRawValue()?.toISOString().split('T')[0];
    console.log(stringDate);
    this.nasaService.getImage(stringDate || '').subscribe(res => {
      console.log(res);
    });
    
  }


}
