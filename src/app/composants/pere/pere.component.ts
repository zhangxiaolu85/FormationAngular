import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilsComponent } from '../fils/fils.component';
import { TitreComponent } from '../titre/titre.component';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit, AfterContentInit {

  tab: Array<string> = ['premier', 'deuxieme', 'troisieme'];
  nord ='Lille';
  sud = 'Marseille';
  capitale = 'Paris';

  // @ViewChild(FilsComponent, {static: false}) fils: FilsComponent;
  // @ViewChildren(FilsComponent) fils: QueryList<FilsComponent>;
  @ContentChild(TitreComponent, { static: false }) titre: TitreComponent;

  constructor() { 
    // this.fils = new FilsComponent;   @ViewChild
    // this.fils = new QueryList<FilsComponent>();   @ViewChildren
    this.titre = new TitreComponent;
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.fils.ordre);  @ViewChild
    // this.fils.forEach(elt => console.log(elt));   @ViewChildren
    console.log(this.titre.valeur);;
  }

  ngAfterContentInit(): void {
    // console.log(this.titre.valeur);;
  }

}
