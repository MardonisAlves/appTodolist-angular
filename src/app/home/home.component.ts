import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { User } from '../models/User'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private storage:Storage
  
  constructor(private http: HttpClient,private router:Router) { 
    this.storage = window.localStorage
  }

  ngOnInit() {
    this.getUserId()
  }

  getUserId(){
    return this.http.get<User>('http://localhost:3000/list/1')
    .subscribe(dados => {
      console.log(dados)
    },(error) => {
      if(error){
       // this.router.navigateByUrl("")
      }
    })
  }

  idTokem(){
    const id = this.storage.getItem('id');
    console.log(id)
  }

  logout() {
    this.storage.removeItem("id_token");
    this.storage.removeItem("expires_at");
    this.storage.removeItem("id")

    this.router.navigateByUrl("")
  }
}
