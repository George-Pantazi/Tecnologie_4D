import { Component } from '@angular/core';

@Component({
  selector: 'app-variabili',
  template: `
    <div>
      <h2>{{ titolo }}</h2>
      <p>{{ testo }}</p>
    </div>
  `,
})
export class VariabiliComponent {
  titolo = 'Titolo del componente';
  testo = 'Testo del componente';
}