import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ex1',
  styleUrl: './ex1.css',
  templateUrl: './ex1.html',
})
export class Ex1 {

  mensagemVisivel: boolean = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
