import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Tarefas } from '../models/Tarefas';
import { TarefaService } from '../services/Tarefa.service';
@Component({
  selector: 'app-listatarefa',
  templateUrl: './listatarefa.component.html',
  styleUrls: ['./listatarefa.component.css']
})

export class ListatarefaComponent implements OnInit {
  id: any
  listaTarefas: any
  faEdit = faEdit
  faPlus = faPlus
  faTrash = faTrash
  p: number = 1;
 
  constructor(private tarefaService: TarefaService) {}
  ngOnInit(): void {
    this.getTarefas();
  }
  getTarefas():void {
     this.tarefaService.getTarefas().subscribe(listaTarefas => this.listaTarefas = (listaTarefas))
  }
  // excluirtarefa
  excluirTarefa(id: Number) {
    console.log('Excluir ?' + id)
  }

}
