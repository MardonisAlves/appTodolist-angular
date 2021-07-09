import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import {faListAlt , 
  faHome , 
  faBalanceScale ,
  faSignOutAlt , faTimesCircle} from '@fortawesome/free-solid-svg-icons'

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
  faHome=faHome
  faListAlt=faListAlt
  faBalanceScale=faBalanceScale
  faSignOutAlt=faSignOutAlt
  faTimesCircle=faTimesCircle
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
        //this.router.navigateByUrl("")
      }
    } )
  }



  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("id")
    localStorage.removeItem('nome')
  
    this.router.navigateByUrl("")
  }

}
