import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { CrearPageRoutingModule } from './crear-routing.module';
import { CrearPage } from './crear.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CrearPageRoutingModule,
    HeaderModule
  ],
  declarations: [CrearPage]
})
export class CrearPageModule {}
