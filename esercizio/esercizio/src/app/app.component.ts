import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizio';
  scarpe = [
    {id: 1, name:'jordan 1'},
    {id: 2, name:'air force 1'},
    {id: 5, name:'jordan 4'},
    {id: 3, name:'tn 3'},
    {id: 4, name:'air max 95'}
  ];
}
