import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticaPage } from './practica.page';

const routes: Routes = [
  {
    path: '',
    component: PracticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticaPageRoutingModule {}
