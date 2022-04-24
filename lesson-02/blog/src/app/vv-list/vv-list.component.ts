import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vv-list',
  template: `
    <h1 class="cls">
      vv-list works!
    </h1>
  `,
  styles: [
    `.cls {
      color: #666;
      background: red;
    }`
  ]
})
export class VvListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
