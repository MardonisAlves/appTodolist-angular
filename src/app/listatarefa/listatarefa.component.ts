import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faHome , faEdit, faPlus , faTrash , faSignOutAlt} from '@fortawesome/free-solid-svg-icons'


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
  faSignOutAlt=faSignOutAlt
  faHome=faHome
  faEdit=faEdit
  faPlus=faPlus
  faTrash=faTrash
  p: number = 1;
  nome: string = ''
  constructor(private http:HttpClient, private  router:Router) { 
  
    this.nome =  localStorage.getItem('nome') || ''
    
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

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("id")
    localStorage.removeItem('nome')
  
    this.router.navigateByUrl("")
  }
  

}
