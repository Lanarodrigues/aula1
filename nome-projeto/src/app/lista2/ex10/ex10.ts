import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex10.html',
  styleUrls: ['./ex10.css']
})
export class Ex10Component {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150.0, quantidade: 5, promocao: true },
    { id: 2, nome: 'Rato', preco: 80.0, quantidade: 10, promocao: false },
    { id: 3, nome: 'Monitor', preco: 900.0, quantidade: 3, promocao: true },
    { id: 4, nome: 'Auscultadores', preco: 200.0, quantidade: 8, promocao: false },
    { id: 5, nome: 'Tapete de Rato', preco: 40.0, quantidade: 15, promocao: false }
  ];

  alternarPromocao(prod: Produto): void {
    prod.promocao = !prod.promocao;
  }
}