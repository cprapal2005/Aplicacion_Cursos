import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FormularioComponent } from '../formulario/formulario.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, FormularioComponent]
})
export class HomePageModule {}
