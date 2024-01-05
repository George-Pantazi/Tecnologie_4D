import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>App con NgFor, ngIf e Routing</h1>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
      <app-condizione></app-condizione>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}