import { Component, OnInit } from '@angular/core';
import { interval, Observable, of , merge, from, timer, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  status = '';
  tab: Array<number> = [];

  subscription: any;

  constructor() { }

  ngOnInit(): void {
    const tableau = [1, 2, 3];
    // const observable: Observable<number> = from(tableau);    
    // observable.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = error;
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // );

    const observable: Observable<number> = timer(3000, 1000);
    this.subscription = observable.subscribe(
      (value) => { this.tab.push(value); },
      (error) => { this.status = error; },
      () => { this.status = 'fini'; }
      );
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
