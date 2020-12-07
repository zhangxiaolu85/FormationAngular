import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { AuthComponent } from './composants/auth/auth.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { IndexComponent } from './composants/index/index.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { ParentComponent } from './composants/parent/parent.component';
import { PereComponent } from './composants/pere/pere.component';
import { PersonneDetailsComponent } from './composants/personne-details/personne-details.component';
import { PersonneEditionComponent } from './composants/personne-edition/personne-edition.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { ReactiveformComponent } from './composants/reactiveform/reactiveform.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AuthGuard } from './guards/auth.guard';
import { LeaveGuard } from './guards/leave.guard';
import { VEHICULE_ROUTES } from './modules/vehicule/vehicule-routing.module';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'index', component:IndexComponent},
  // {path:'stagiaire', component:StagiaireComponent},
  {path:'stagiaire/:nom/:prenom', component:StagiaireComponent},
  // {path:'adresse', component:AdresseComponent},
  //{path:'formulaire', component:FormulaireComponent},
  {path:'calculette', component:CalculetteComponent},
  {path:'reactiveform', component:ReactiveformComponent},
  {path:'personne', component:PersonneComponent},
  {path:'personneDetails/:id', component:PersonneDetailsComponent},
  {path:'personneEdition/:id', component:PersonneEditionComponent},
  {path:'vehicule', children:VEHICULE_ROUTES},
  {path:'pereEtFils', component:PereComponent},
  {path:'parentEtChild', component:ParentComponent},
  {path:'adresse', component:AdresseComponent, canActivate:[AuthGuard] },
  {path:'auth', component:AuthComponent},
  {path:'formulaire', component:FormulaireComponent, canActivate:[AuthGuard], canDeactivate:[LeaveGuard]},
  {path:'observable', component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
