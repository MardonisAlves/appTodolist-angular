import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefas } from '../models/Tarefas';
import { Observable } from 'rxjs';
import baseURl from '../baseURl/baseUrl';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  lista:any = ''
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

  updateTarefa(id:number ,tarefa:Tarefas): Observable<Tarefas>{
  console.log(id , tarefa)
   return this.http.put<Tarefas>(`${baseURl}uptarefa/${id}` , tarefa)
   
  }

  deleteTarefa(id:number): Observable<Tarefas>{
    return this.http.delete<Tarefas>(`${baseURl}deltarefa/${id}`)
  }

  /*searchTarefas*/
  searchTarefas(term:string): Observable<Tarefas[]>{
    if(!term.trim()){
      return this.lista
    }
    return this.http.get<Tarefas[]>(`${baseURl}search/${term}`)
    .pipe(
      tap(tarefa => tarefa.length ?
        console.log(`found heroes matching "${term}"`) :
        console.log(`no heroes matching "${term}"`))
    )
  }

  /*countTarefas*/
  countTarefasPendentes(): Observable<Tarefas>{
    return this.http.get<Tarefas>(`${baseURl}tarefasPendetes`)
  }

  countTotaltarefas(): Observable<Tarefas>{
    return this.http.get<Tarefas>(`${baseURl}totalTarefas`)
  }

  tarefasConcluidas(): Observable<Tarefas>{
    return this.http.get<Tarefas>(`${baseURl}concluidas`)
  }

  getValorTotal(): Observable<Tarefas>{
    return this.http.get<Tarefas>(`${baseURl}valortotal`)
  }
}
