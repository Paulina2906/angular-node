import { Component } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { StatusComponent } from 'src/app/components/status/status.component';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent {

  form = new FormGroup({
    date: new FormControl()
  });

  data: any = null;

  constructor(private nasaService: NasaService, private dialog: MatDialog) {
  }

  async search(ev: any) {
    console.log(ev);
    const stringDate = this.form.controls.date.getRawValue()?.toISOString().split('T')[0];
    console.log(stringDate);
    this.nasaService.getImage(stringDate || '').pipe(
      catchError( (err) => {
        console.log(err);
        this.dialog.open(StatusComponent, {
          data: {
            title:  'Api Error',
            message: '',
            success: false,
          },
          width: '800px',
          height: 'auto',
        });
        return of();
      }
    )).subscribe((res: any) => {
      if( res && res.length === 0 ){
        this.dialog.open(StatusComponent, {
          data: {
            title:  'No hay datos en la fecha seleccionada',
            message: '',
            success: true,
          },
          width: '800px',
          height: 'auto',
        });
      }
      this.data = res;
    });
  }


  getUrl(image: string) {
    const ext = 'jpg';
    const fecha = this.form.controls.date.getRawValue()?.toISOString().split('T')[0].split('-');
    return `https://epic.gsfc.nasa.gov/archive/natural/${fecha[0]}/${fecha[1]}/${fecha[2]}/${ext}/${image}.${ext}`;
  }
}
