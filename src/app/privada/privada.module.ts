import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrivadaPageRoutingModule } from './privada-routing.module';
import { PrivadaPage } from './privada.page';
import { StateService } from '../state/state.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivadaPageRoutingModule,
    StateService,
  ],
  declarations: [PrivadaPage]
})
export class PrivadaPageModule {}
