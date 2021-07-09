import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Tarefas } from 'src/app/models/Tarefas';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import  baseURl  from '../../baseURl/baseUrl'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tarefa',
  templateUrl: './edit-tarefa.component.html',
  styleUrls: ['./edit-tarefa.component.css']
})
export class EditTarefaComponent implements OnInit {
  tarefa: any
  faHome = faHome
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.getTarefa();
  }


   /* Este metodo recebe um parametro id
    o id a gente obtem do localStorage
  */
    getTarefa(){
      /* extrair o parametro id da rota e converte para um Number*/
    const id = Number(this.route.snapshot.paramMap.get('id'));
     return this.http.get<Tarefas>(`${baseURl}tarefa/${id}`)
     .subscribe( (data => {
        this.tarefa = data
        console.log(this.tarefa)
  
     }),err => {
        console.log(err)
     }
  
     )
    }
  onUpdateTarefa(f: NgForm){
    console.log(f.value)

    this.goBack();
  }


  goBack(): void {
    this.location.back();
  }

}
