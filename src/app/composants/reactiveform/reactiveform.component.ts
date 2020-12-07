import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  nomPattern = "^[A-Z][a-z]{2,10}";

  personnes: any = [];

  //personneForm = new FormGroup({
   // id: new FormControl('', Validators.required),
   // nom: new FormControl('', [Validators.required, Validators.pattern(this.nomPattern)]),
    //prenom: new FormControl('', [Validators.required, this.checkPrenomValidator])
  //});

  //personneForm = new FormGroup({
  //  id: new FormControl(''),
  //  nom: new FormControl(''),
  //  prenom: new FormControl(''),
   // adresse: new FormGroup({
  //  rue: new FormControl(''),
  //  ville: new FormControl(''),
  //  codePostal: new FormControl('')
  //  })
  //});
  
  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    nom: ['', [Validators.required, Validators.pattern(this.nomPattern)]],
    prenom: ['', [Validators.required, this.checkPrenomValidator]],
    adresse: this.fb.group({
      rue: [''],
      ville: [''],
      codePostal: ['']
    }),
    sports: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    //this.personneForm.setValue({nom:'wick', prenom:'oo', id:'123'});
    this.personneForm.patchValue({
      prenom: 'abruzzi',
      adresse: {
      codePostal: '13000'}
      });
  }

  checkPrenomValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
      return null;
    } else {
      return { erreur: 'Prenom non valide' };
    }
  }

  afficherTout() { 
    this.personnes.push({ ...this.personneForm.value });
    console.log(this.personneForm.value)
  }

  ajouterSport() {
    this.sports.push(this.fb.control(''));
  }

  supprimerSport(index : number) {
    this.sports.removeAt(index);
  }

  get nom() {
    return this.personneForm.get('nom');
  }
  get id() {
    return this.personneForm.get('id');
  }
  get prenom() {
    return this.personneForm.get('prenom');
  }

  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }



}
