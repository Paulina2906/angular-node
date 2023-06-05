import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaComponent } from './pages/nasa/nasa.component';
import { SimpsonsComponent } from './pages/simpsons/simpsons.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: 'nasa',
    component: NasaComponent,
  },
  {
    path: 'simpsons',
    component: SimpsonsComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: '**',
    redirectTo: 'nasa'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
