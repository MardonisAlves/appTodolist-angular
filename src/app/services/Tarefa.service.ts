import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefas } from '../models/Tarefas';
import { Observable } from 'rxjs';
import baseURl from '../baseURl/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor (private http: HttpClient) { }


  /*New Tarefa*/
  newTarefa(tarefas: Tarefas): Observable<Tarefas> {
    console.log(tarefas)
    return this.http.post<Tarefas>(`${baseURl}tarefa`, tarefas)
  }


  /*Get all tarefasfrom user*/
  getTarefas(): Observable<Tarefas> {
    const id = JSON.parse(localStorage.getItem('id') || "")
    return this.http.get<Tarefas>(`${baseURl}tarefas/${id}`)
      .pipe()
  }
  /*get tarefa by id*/
  gettarefa(id:Number): Observable<Tarefas> {
    return this.http.get<Tarefas>(`${baseURl}tarefa/${id}`)
  }

  /*updateTarefa*/

  updateTarefa(id:Number , tarefa:Tarefas): Observable<Tarefas>{
  console.log(id , tarefa)
   return this.http.put<Tarefas>(`${baseURl}uptarefa/${id}` , tarefa)
   
  }

}
