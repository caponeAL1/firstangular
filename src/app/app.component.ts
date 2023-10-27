import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<div style="color:magneta"><b>Welcome to Angular</b><u>Intro to Angular</u></div>',
  styles:['b{color:cyan}','div{color:yellow}']
})
export class AppComponent {
  title = 'First Website in Angular';
  name:string='Aravind LN';
}
