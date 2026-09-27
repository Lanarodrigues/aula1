import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardproduto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardproduto.html',
  styleUrl: './cardproduto.css'
})
export class Cardproduto {
  @Input() nome: string = '';
  @Input() valor: number = 0;
  @Input() disponivel: boolean = false;
}
