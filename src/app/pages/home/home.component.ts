import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  jsonIn = {
    tipoCliente: 'PF',
    nome: 'nome',
    cognome: 'cognome',
    ragioneSociale: 'ragione',
  }

  pulisciDenominazione() {
    if(this.jsonIn.tipoCliente === 'PF') {
      this.jsonIn.ragioneSociale = '';
    } else if(this.jsonIn.tipoCliente === 'PG') {
      this.jsonIn.nome = '';
      this.jsonIn.cognome = '';
    } 
  }

  salva() {
    const jsonIn = JSON.parse(JSON.stringify(this.jsonIn));
    if(jsonIn.tipoCliente === 'PF') {
      delete jsonIn.ragioneSociale;
    } else if(jsonIn.tipoCliente === 'PG') {
      delete jsonIn.nome;
      delete jsonIn.cognome;
    } 
    // chiamataBackend(jsonIn);
  }
}
