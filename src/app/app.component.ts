import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from './classes/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  constructor(private router: Router){
  };
  direBonjour() {
    return "Bonjour angular"
  }

  getColor() {
    return "white";
  }

  getBackgroundColor() {
    return "red";
  }

  logout() {
    localStorage.removeItem('isConnected');
    this.router.navigate(['']);
  }

  isConnected() {
    if (Boolean(localStorage.getItem('isConnected'))) {
      return true;
    } else {
      return false;
    }
  }
}
