import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-list',
  templateUrl: './use-list.component.html',
  styles: [
    `.custom {
      color: gray;
      background: #F5F5F5
    }`
  ]
})
export class UseListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
