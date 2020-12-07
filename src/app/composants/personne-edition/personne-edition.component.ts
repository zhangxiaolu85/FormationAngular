import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne-edition',
  templateUrl: './personne-edition.component.html',
  styleUrls: ['./personne-edition.component.css']
})
export class PersonneEditionComponent implements OnInit {

  personne: Personne = {};

  constructor(private personneService:PersonneService) { }

  ngOnInit(): void {
    //this.personne = this.personneService.getPersonById(1);
  }

}
