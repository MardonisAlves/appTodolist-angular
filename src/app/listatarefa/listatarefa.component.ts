import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faHome , faEdit, faPlus , faTrash} from '@fortawesome/free-solid-svg-icons'


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
  faEdit=faEdit
  faPlus=faPlus
  faTrash=faTrash
  p: number = 1;

  constructor(private http:HttpClient, private  router:Router) { 
  
   
    
  }

  ngOnInit(): void {
    this.getTarefas();
  }

  /* Este metodo recebe um parametro id
    o id a gente obtem do localStorage
  */
  getTarefas(){
    /* Agora vamos fazer a chamada do metodo do back-end*/
    const id = JSON.parse(localStorage.getItem('id') || "")
   return this.http.get<Tarefas>(`${baseURl}tarefas/${id}`)
   .subscribe( (data => {
      this.listaTarefas = data
      console.log(this.listaTarefas)

   }),err => {
      console.log(err)
   }

   )
  }
  
  

  // excluirtarefa
  excluirTarefa(id:Number){
    console.log('Excluir ?' + id)
  }
  

}
