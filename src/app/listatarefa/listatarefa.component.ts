import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'


import baseURl from '../baseURl/baseUrl'
import { Tarefas } from '../models/Tarefas';
import { Userservice } from '../services/User.service';
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
 
  constructor(private userService: Userservice) {}
  ngOnInit(): void {
    this.getTarefas();
  }
  getTarefas():void {
     this.userService.getTarefas().subscribe(listaTarefas => this.listaTarefas = listaTarefas)
  }
  // excluirtarefa
  excluirTarefa(id: Number) {
    console.log('Excluir ?' + id)
  }

}
