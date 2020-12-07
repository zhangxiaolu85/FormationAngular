import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  nom = "";

  personne:Personne = { };

  constructor() { }

  ngOnInit(): void {
  }

  personnes: Array<Personne> = [];

  ajouterPersonne() {
    this.personnes.unshift({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
    console.log(this.personnes);
  }

  supprimerPersonne(per : Personne) {
    //for (var i = this.personnes.length - 1; i >= 0; --i) {
     // if (this.personnes[i].nom == per.nom && this.personnes[i].prenom == per.prenom) {
     //   this.personnes.splice(i,1);
      //}
    //}
    const index: number = this.personnes.indexOf(per);
    this.personnes.splice(index, 1);
  }

  supprimerPersonneByIndex(index : number) {
    this.personnes.splice(index, 1);
  }



}
