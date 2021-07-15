import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefas } from '../../../../models/Tarefas';
import { TarefaService } from 'src/app/services/Tarefa.service';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  faCloudUploadAlt=faCloudUploadAlt
 
  constructor(
    private tarefaService: TarefaService,
    private authservice:AuthServiceService) { }

  ngOnInit(): void {
  }


  //novaTarefa
  novaTarefa(f: NgForm) {
    
    const id = 0
    const userid = JSON.parse(localStorage.getItem("id") || "")
    const nome  = f.value.nome
    
    const local = f.value.local
    const situacao = f.value.situacao
    const valor = f.value.valor
    const data = f.value.data


    let tarefas = new Tarefas(id, local, nome , situacao, userid, valor, data)
    return this.tarefaService.newTarefa(tarefas)
      .subscribe(res => {
        this.goBack();
      });

  }

  goBack(): void {
    this.authservice.goBack();
  }

}
