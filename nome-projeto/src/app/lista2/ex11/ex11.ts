import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex11',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex11.html',
  styleUrls: ['./ex11.css']
})
export class Ex11Component {
  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150.0, quantidade: 0 },
    { id: 2, nome: 'Rato', preco: 80.0, quantidade: 10 },
    { id: 3, nome: 'Monitor', preco: 900.0, quantidade: 0 },
    { id: 4, nome: 'Auscultadores', preco: 200.0, quantidade: 8 },
    { id: 5, nome: 'Tapete de Rato', preco: 40.0, quantidade: 15 }
  ];
}