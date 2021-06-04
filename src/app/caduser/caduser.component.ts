import { HttpClient } from '@angular/common/http';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserLock, faKey, faUserCircle, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import baseUrl from './../baseURl/baseUrl'
import { User } from '../models/User';


import { Userservice } from '../services/User.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-caduser',
  templateUrl: './caduser.component.html',
  styleUrls: ['./caduser.component.css']
})
export class CaduserComponent implements OnInit {
  faUserLock = faUserLock
  faKey = faKey
  faUserCircle = faUserCircle
  faMinusSquare = faMinusSquare
 error: any
  camposvazio: string
  userService: Userservice
  

  Object = Object
  constructor(private http: HttpClient, userService: Userservice) {
    this.userService = userService
    this.error = {}
    this.camposvazio = ''

  }

  ngOnInit(): void {
  }

  OnSubmit(f: NgForm) {


    const nome = f.value.nome
    const sobrenome = f.value.sobrenome
    const email = f.value.email
    const password = f.value.password
    const reset = f.value.reset

    let user = new User(nome, sobrenome, email, password);
    this.Caduser(user)
  
  }

  Caduser(user:any){

    return this.http.post<User>(`${baseUrl}new`, user)
    .forEach((res) => {
        console.log(res) 
       
    }).catch(err => {
       this.error = err.error.list
       console.log(this.error)
    })
    
}
}


