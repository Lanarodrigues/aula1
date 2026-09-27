import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cabecalho } from './cabecalho/cabecalho';
import { Cardproduto } from './cardproduto/cardproduto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Cabecalho, Cardproduto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  produtos = [
    { nome: 'Teclado mecânico', valor: 250, disponivel: true },
    { nome: 'Mouse sem fio', valor: 120, disponivel: true },
    { nome: 'Monitor', valor: 1500, disponivel: false }
  ];
}