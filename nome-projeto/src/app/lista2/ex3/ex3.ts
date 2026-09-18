import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex3.html',
  styleUrls: ['./ex3.css']
})
export class Ex3Component {
  idade: number = 0;

  aumentar(): void {
    this.idade++;
  }

  diminuir(): void {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}