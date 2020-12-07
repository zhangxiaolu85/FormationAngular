import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  cp : any;
  ville : any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(res => {
      this.cp = res.get('cp');
      this.ville = res.get('ville');
      console.log(this.cp + ' ' + this.ville);
    })
  }

}
