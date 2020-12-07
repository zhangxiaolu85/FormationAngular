import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit {

  @Input() valeur: any;
  @Input() couleur: any;

  constructor() { }

  ngOnInit(): void {
  }

}
