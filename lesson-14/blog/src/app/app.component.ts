import { Component } from '@angular/core';
interface List {
  name: string;
  email: string;
  phone: string;
  accounts: string[];
}
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
  list: List[] = [
    {
      name: 'Adam',
      phone: '1888888888',
      email: 'adam@citi.com',
      accounts: ['Facebook', 'Gmail', 'Linkedin'],
    },
    {
      name: 'Sam',
      phone: '1888888888',
      email: 'sam@citi.com',
      accounts: ['Facebook', 'Telegram', 'Linkedin'],
    },
    {
      name: 'Peter',
      phone: '1888888888',
      email: 'peter@citi.com',
      accounts: ['Facebook', 'Instagram', 'Linkedin'],
    },
    {
      name: 'Tony',
      phone: '1888888888',
      email: 'tony@citi.com',
      accounts: ['Yahoo', 'Gmail', 'Youtube'],
    },
  ];
}
