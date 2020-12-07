import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  number1 : number = 0;
  number2 : number = 0;

  result : number = 0;

  buttonType = "ajouter";

  constructor() { }

  ngOnInit(): void {
  }

  ajouter() : void {
    this.result = this.number1 + this.number2;
  }
  
  soustraire() : void {
    this.result = this.number1 - this.number2;
  }
  
  multiplier() : void {
    this.result = this.number1 * this.number2;
  }
  
  diviser() : void {
    this.result = this.number1 / this.number2;
  }

}
