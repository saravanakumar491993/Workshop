import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animtest',
  templateUrl: './animtest.component.html',
  styleUrls: ['./animtest.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s 0ms ease-in-out')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AnimtestComponent implements OnInit {

  isOpen = true;
  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit() {
  }

}
