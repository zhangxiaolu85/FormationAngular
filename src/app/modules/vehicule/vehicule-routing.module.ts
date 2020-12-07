import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CamionComponent } from './camion/camion.component';
import { VoitureComponent } from './voiture/voiture.component';

export const VEHICULE_ROUTES:Routes = [
  {path: 'camion', component:CamionComponent},
  {path: 'voiture', component:VoitureComponent},
  {path: '', component:VoitureComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(VEHICULE_ROUTES)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
