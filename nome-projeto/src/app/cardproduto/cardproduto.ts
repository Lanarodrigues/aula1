import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-cardproduto',
  styleUrl: './cardproduto.css',
  templateUrl: './cardproduto.html',
})
export class Cardproduto {
  @Input() nome : string = 'Teclado mecânico';
  @Input() preço: number = 250;
  @Input() disponivel: boolean = true;
}
