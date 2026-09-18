import { Component } from '@angular/core';
import { Ex1Component } from './lista2/ex1/ex1';
import { Ex2Component } from './lista2/ex2/ex2';
import { Ex3Component } from './lista2/ex3/ex3';
import { Ex4Component } from './lista2/ex4/ex4';
import { Ex5Component } from './lista2/ex5/ex5';
import { Ex6Component } from './lista2/ex6/ex6';
import { Ex7Component } from './lista2/ex7/ex7';
import { Ex8Component } from './lista2/ex8/ex8';
import { Ex9Component } from './lista2/ex9/ex9';
import { Ex10Component } from './lista2/ex10/ex10';
import { Ex11Component } from './lista2/ex11/ex11';
import { Ex12Component } from './lista2/ex12/ex12';
import { Ex13Component } from './lista2/ex13/ex13';
import { Ex14Component } from './lista2/ex14/ex14';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Ex6Component,
    Ex7Component,
    Ex8Component,
    Ex9Component,
    Ex10Component,
    Ex11Component,
    Ex12Component,
    Ex13Component,
    Ex14Component
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'nome-projeto';
}