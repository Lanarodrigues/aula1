import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex12.html',
  styleUrls: ['./ex12.css']
})
export class Ex12Component {
  novoNome: string = '';
  novaQuantidade: number | null = null;
  mensagemErro: string = '';

  produtos: Produto[] = [
    { nome: 'Teclado', quantidade: 5 },
    { nome: 'Rato', quantidade: 10 }
  ];

  cadastrarProduto(): void {
    if (!this.novoNome || this.novoNome.trim() === '') {
      this.mensagemErro = 'Por favor, informe o nome do produto.';
      return;
    }

    if (this.novaQuantidade === null || this.novaQuantidade < 0) {
      this.mensagemErro = 'A quantidade deve ser um número maior ou igual a zero.';
      return;
    }

    this.produtos.push({
      nome: this.novoNome.trim(),
      quantidade: this.novaQuantidade
    });

    this.novoNome = '';
    this.novaQuantidade = null;
    this.mensagemErro = '';
  }

  excluirProduto(index: number): void {
    this.produtos.splice(index, 1);
  }
}