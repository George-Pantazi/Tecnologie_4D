import { Component } from '@angular/core';

@Component({
  selector: 'app-condizione',
  template: `
    <div>
      <h3 *ngIf="mostraContenuto">Contenuto visibile!</h3>
      <p *ngIf="!mostraContenuto">Contenuto nascosto!</p>
      <button (click)="toggleContenuto()">Cambia visibilità</button>
    </div>
  `,
})
export class CondizioneComponent {
  mostraContenuto = true;

  toggleContenuto() {
    this.mostraContenuto = !this.mostraContenuto;
  }
}