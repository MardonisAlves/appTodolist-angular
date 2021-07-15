import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {faUndoAlt , faSync} from '@fortawesome/free-solid-svg-icons'
import { TarefaService } from 'src/app/services/Tarefa.service';
import { ActivatedRoute } from '@angular/router';
import { Tarefas } from 'src/app/models/Tarefas';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-edit-tarefa',
  templateUrl: './edit-tarefa.component.html',
  styleUrls: ['./edit-tarefa.component.css']
})
export class EditTarefaComponent implements OnInit {
  tarefa: any
  faUndoAlt=faUndoAlt
  faSync=faSync
  constructor(
    private route:ActivatedRoute,
    private tarefaService : TarefaService,
    private authService: AuthServiceService
    ) { }

  ngOnInit(): void {
    this.getTarefa();
  }

    getTarefa():void{
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.tarefaService.gettarefa(id)
     .subscribe(tarefa => this.tarefa = tarefa)

    }

  onUpdateTarefa(f: NgForm){
    const userid = Number(localStorage.getItem('id'))
    const id = Number(this.route.snapshot.paramMap.get('id'))
    const nome = f.value.nome
    const data = f.value.data
    const valor = f.value.valor
    const status = f.value.status
    const local = f.value.local

    let tarefa = new Tarefas(id, local , nome, status ,userid ,valor , data);
    this.tarefaService.updateTarefa(id , tarefa)
    .subscribe(res => {
      this.goBack()
    }, err => {
      console.log(err)
    })

    
  }


  goBack(): void {
    this.authService.goBack();
  }

}
