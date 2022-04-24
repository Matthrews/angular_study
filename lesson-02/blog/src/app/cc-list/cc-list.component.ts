import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-list',
  template: `
    <h2 class="custom">
      cc-list works!
    </h2>
  `,
  styleUrls: ['./cc-list.component.css']
})
export class CcListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
