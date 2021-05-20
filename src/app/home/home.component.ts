import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { Tarefas } from '../models/Tarefas';
import baseUrl from './../baseURl/baseUrl'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private storage:Storage
  private id: any
  nome:string = ''
  constructor(private http: HttpClient,private router:Router) { 
    this.storage = window.localStorage
    this.id = localStorage.getItem('id')
    this.nome =  localStorage.getItem('nome') || ''
   
  }

  ngOnInit() {
    this.getTarefasId()
  }

  /*este metodo sera gettodoListId*/
  /* criar directory base url */
  getTarefasId(){
    return this.http.get<Tarefas>(`${baseUrl}tarefas/${this.id}`)
    .subscribe(dados => {
      console.log(dados)
    },(error) => {
      if(error){
        this.router.navigateByUrl("")
      }
    })
  }

}
