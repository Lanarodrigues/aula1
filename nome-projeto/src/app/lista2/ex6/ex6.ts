import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex6.html',
  styleUrls: ['./ex6.css']
})
export class Ex6Component {
  listaInicial: string[] = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Eduarda'];
  nomes: string[] = [...this.listaInicial];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.listaInicial];
  }
}