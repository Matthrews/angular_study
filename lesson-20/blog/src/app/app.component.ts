import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface UserInfo {
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Style Binding';
  color = 'gray';
  updateColor() {
    this.color = 'blue';
  }
  userData: any = {};
  getData(data: NgForm) {
    this.userData = data;
  }
  display = true;
  toggle() {
    this.display = !this.display;
  }
}
