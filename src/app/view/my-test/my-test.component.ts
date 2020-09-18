import { Component, OnInit } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  constructor() 
  {

    console.log("MyTest constructed");
   }

  ngOnInit() {
  }

}
