import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  template: `
    <div>
      <h2>Padre Component</h2>
      <app-figlio></app-figlio>
    </div>
  `,
})
export class PadreComponent {}