import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() nom: string = "";
  @Output() message = new EventEmitter<number>();
  note: number = 0;
  buttonStatus: boolean = false;
  constructor() { 
  }

  ngOnInit(): void {
  }

  send() {
    this.message.emit(this.note);
    this.buttonStatus = true;
  }

}
