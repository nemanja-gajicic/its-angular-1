import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titolo = 'my-app';

  cambiaTitolo(nome: string): void {
    this.titolo = nome;
  }
}
