import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import  baseURl  from '../../baseURl/baseUrl'
import { Tarefas } from '../../models/Tarefas';
import { faHome ,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  faHome = faHome
  faSignOutAlt=faSignOutAlt
  nome:string | ''
  constructor(
    private router:Router,
    private http: HttpClient,
    private location: Location) { 
      this.nome =  localStorage.getItem('nome') || ''
    }

  ngOnInit(): void {
  }


  //novaTarefa
  novaTarefa(f:NgForm){
    console.log(f.value)
   
   const id = 0
   const userid = JSON.parse(localStorage.getItem("id") || "")
   const nome = f.value.nome
   const local = f.value.local
   const situacao = f.value.situacao
   const valor = f.value.valor
   const data = f.value.data
  let  tarefas = new Tarefas(id ,local ,nome , situacao , userid ,valor , data)
  console.log(tarefas)
    return this.http.post<Tarefas>(`${baseURl}tarefa` , tarefas)
    .subscribe( res =>{
    console.log(res)
    this.goBack();
    } , err => {
      console.log(err)
      
    })
    
  }

  goBack():void{
    this.location.back();
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("id")
    localStorage.removeItem('nome')
  
    this.router.navigateByUrl("")
  }

}
