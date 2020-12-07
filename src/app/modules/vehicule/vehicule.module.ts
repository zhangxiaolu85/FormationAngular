import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamionComponent } from './camion/camion.component';
import { VehiculeRoutingModule } from './vehicule-routing.module';
import { VoitureComponent } from './voiture/voiture.component';



@NgModule({
  declarations: [CamionComponent, VoitureComponent],
  imports: [
    CommonModule,
    VehiculeRoutingModule
  ]
})
export class VehiculeModule { }
