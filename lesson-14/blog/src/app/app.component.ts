import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Property Binding';
  title2: string = 'If/Else Condition';
  name: string = 'matthew';
  disable: boolean = false;
  show: boolean = false;
  color: string = 'ccc';
  users: string[] = ['Adam', 'Sam', 'Peter', 'Tony'];
}
