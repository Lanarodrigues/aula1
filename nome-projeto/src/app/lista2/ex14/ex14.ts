import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  disponivel: boolean;
}

export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex14',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex14.html',
  styleUrls: ['./ex14.css']
})
export class Ex14Component {

  usuarioLogado: boolean = true;
  nomeUsuario: string = 'Lana';

  produtos: Produto[] = [
    { id: 101, nome: 'Teclado Mecânico', preco: 250, disponivel: true },
    { id: 102, nome: 'Rato Sem Fios', preco: 120, disponivel: false },
    { id: 103, nome: 'Monitor 144Hz', preco: 1100, disponivel: true }
  ];

  
  tarefas: Tarefa[] = [];

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}