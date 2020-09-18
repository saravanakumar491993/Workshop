import { OrderserviceService } from './../../order/orderservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursehome',
  templateUrl: './coursehome.component.html',
  styleUrls: ['./coursehome.component.sass'],
  providers: [OrderserviceService]
})
export class CoursehomeComponent implements OnInit {

  constructor(public order: OrderserviceService) 
  {

   }

  ngOnInit() {
  }

}
