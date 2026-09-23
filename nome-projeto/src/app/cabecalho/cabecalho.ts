import { Component, Input, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cabecalho',
  styleUrl: './cabecalho.css',
  templateUrl: './cabecalho.html',
})
export class Cabecalho {
 @Input() nome = 'Loja Angular';

}
