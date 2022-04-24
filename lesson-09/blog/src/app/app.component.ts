import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '12.0.0';
  subTitle = 'Get Input Field Value';
  getName(name: string = 'Matthew') {
    alert(name);
  }
  getKey(str: string) {
    console.log('getKey', str);
  }
  displayName: string = '';
  getValue(value: string) {
    this.displayName = value;
  }
}
