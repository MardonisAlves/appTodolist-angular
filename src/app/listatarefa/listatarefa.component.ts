import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {faListAlt , faHome , faBalanceScale} from '@fortawesome/free-solid-svg-icons'
import  baseURl  from '../baseURl/baseUrl'
import { Tarefas } from '../models/Tarefas';
@Component({
  selector: 'app-listatarefa',
  templateUrl: './listatarefa.component.html',
  styleUrls: ['./listatarefa.component.css']
})
export class ListatarefaComponent implements OnInit {
  id: any
  listaTarefas: any
  faHome=faHome
  selectedTarefa?:Tarefas

  constructor(private http:HttpClient) { 
    this.id = localStorage.getItem('id') || ""
  }

  ngOnInit(): void {
    this.getTarefas(this.id);
  }

  /* Este metodo recebe um parametro id
    o id a gente obtem do localStorage
  */
  getTarefas(id:any){
    /* Agora vamos fazer a chamada do metodo do back-end*/
   return this.http.get<Tarefas>(`${baseURl}tarefas`,id)
   .subscribe( (data => {
      this.listaTarefas = data
      console.log(this.listaTarefas)

   }),err => {
      console.log(err)
   }

   )
  }

  // display tarefa
  onSelect(tarefa: Tarefas): void{
    this.selectedTarefa = tarefa
  }

  // update tarefa
  onUpdateTarefa(f:NgForm){
    console.log(f.value)
  }
}
