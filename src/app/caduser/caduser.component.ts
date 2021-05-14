import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserLock , faKey , faUserCircle , faMinusSquare} from '@fortawesome/free-solid-svg-icons'

import { Userservice } from '../services/User.service';

@Component({
  selector: 'app-caduser',
  templateUrl: './caduser.component.html',
  styleUrls: ['./caduser.component.css']
})
export class CaduserComponent implements OnInit {
  faUserLock = faUserLock
  faKey = faKey
  faUserCircle=faUserCircle
  faMinusSquare= faMinusSquare
  error:string
  userService:Userservice
  
  constructor(private http:HttpClient,userService:Userservice) {
    this.userService = userService
    this.error = ''
    
  }

  ngOnInit(): void {
  }

  OnSubmit(f:NgForm){

    const nome =  f.value.nome
    const sobrenome = f.value.sobrenome
    const  email = f.value.email
    const password = f.value.password
   let user = { nome,sobrenome,email ,password}

   console.log(user)
    this.userService.Caduser(user)

  }

}
