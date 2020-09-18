import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, Subscription, of } from 'rxjs';
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-observablerxjx',
  templateUrl: './observablerxjx.component.html',
  styleUrls: ['./observablerxjx.component.scss']
})
export class ObservablerxjxComponent implements OnInit, OnDestroy {


  timer: Subscription;

  constructor() { }

  ngOnInit() {
    let numbers  = of(1, 2, 3, 4, 5).pipe(
      filter(m => m %2 != 0),
      map(m => m * 2)
    );

    numbers.subscribe(t =>{
      console.log(t)
    })
    

  }

  ngOnDestroy() {
    //this.timer.unsubscribe();
  }


  showChat: boolean = false;

  toggleChat() {
    this.showChat = !this.showChat;
  }

}
