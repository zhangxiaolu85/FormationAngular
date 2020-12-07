import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'angular-app';
  personne : Personne = new Personne(1, 'ZHANG','Xiaolu');
  tab: number[] = [2, 3, 5, 8];
  nom='wick';
  couleur='blue';

  personnes: Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(101, 'Abruzzi', 'John'),
    new Personne(102, 'Marley', 'Bob'),
    new Personne(103, 'Segal', 'Steven')
  ];

  direBonjour() {
    return "Bonjour angular"
  }

  getColor() {
    return "white";
  }

  getBackgroundColor() {
    return "red";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
