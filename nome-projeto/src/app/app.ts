import { Component } from '@angular/core';
import { Cardproduto } from './cardproduto/cardproduto';
import { Cabecalho} from './cabecalho/cabecalho';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    Cardproduto,
    Cabecalho

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  produtonome = 'Teclado mecânico';
  produtovalor= 250;
  produtodisponivel = true;
  title = 'nome-projeto';
}