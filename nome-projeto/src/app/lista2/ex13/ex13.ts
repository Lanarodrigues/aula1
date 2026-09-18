import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex13.html',
  styleUrls: ['./ex13.css']
})
export class Ex13Component {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Configurar servidor', responsavel: 'Ana', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Atualizar documentação', responsavel: 'Bruno', prioridade: 'baixa', concluida: true },
    { id: 3, titulo: 'Corrigir bug no formulário', responsavel: 'Carla', prioridade: 'alta', concluida: false },
    { id: 4, titulo: 'Desenhar layout', responsavel: 'Daniel', prioridade: 'média', concluida: false },
    { id: 5, titulo: 'Revisar PRs', responsavel: 'Eduardo', prioridade: 'média', concluida: true },
    { id: 6, titulo: 'Fazer testes unitários', responsavel: 'Fernanda', prioridade: 'baixa', concluida: false }
  ];

  alternarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}