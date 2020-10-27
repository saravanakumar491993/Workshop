import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interceptor-test',
  templateUrl: './interceptor-test.component.html',
  styleUrls: ['./interceptor-test.component.sass']
})
export class InterceptorTestComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  call() {
    this.httpClient.get('https://www.google.com').subscribe();
  }
}
