import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Tarefas } from '../models/Tarefas';
import baseUrl from './../baseURl/baseUrl'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class Userservice {
    private id = localStorage.getItem('id')
    listaTarefas: any
    constructor(private http:HttpClient){
        
    }
    /*novo user*/
    Caduser(user:any){

        return this.http.post<User>(`${baseUrl}new`, user)
        .forEach((res) => {
            console.log(res) 
           
        }).catch(err => {
            console.log(err.error.list)
        })
        
    }

    /*Get all tarefasfrom user*/
    getTarefas(): Observable<Tarefas>{
        const id = JSON.parse(localStorage.getItem('id') || "")
        return this.http.get<Tarefas>(`${baseUrl}tarefas/${id}`)
          .pipe()
      }

    
}
