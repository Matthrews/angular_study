import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '12.0.0';
  title2 = 'Get Input Field Value';
  title3 = 'Make Counter';
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
  count: number = 0;
  counter(type: string) {
    if (type === 'add') {
      this.count++;
    } else if (type === 'minus') {
      this.count--;
    } else {
      console.warn('Unknown type');
    }
  }
}
