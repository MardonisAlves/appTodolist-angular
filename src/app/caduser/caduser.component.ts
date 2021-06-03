import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserLock, faKey, faUserCircle, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

import { User } from '../models/User';


import { Userservice } from '../services/User.service';

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
  error: string
  camposvazio:string
  userService: Userservice

  constructor(private http: HttpClient, userService: Userservice) {
    this.userService = userService
    this.error = ''
    this.camposvazio = ''

  }

  ngOnInit(): void {
  }

  OnSubmit(f: NgForm) {
    //console.log(f.value)

    const nome = f.value.nome
    const sobrenome = f.value.sobrenome
    const email = f.value.email
    const password = f.value.password
    const reset = f.value.reset

    //let user ={ nome, sobrenome, email, password }
    let user =  new User(nome , sobrenome,email ,password);
   //console.log(user);  
        
      
    if (nome == '' || sobrenome == '' || email == '' || password == '' || reset == '') {
      this.camposvazio = 'Campo obrigatório *'
    }
   
    if (password == reset && password != '' && reset != '' ) {
      this.userService.Caduser(user)
      this.camposvazio = ''
      this.error = ''
    } else{
      this.error = "A senha deve ser igual"
     
  }
  

}
}


