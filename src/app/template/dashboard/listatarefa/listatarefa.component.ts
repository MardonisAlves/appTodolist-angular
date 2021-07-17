import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faPlus, faTrashAlt , faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { AlertService } from '../../../services/Alert.service';
import { TarefaService } from '../../../services/Tarefa.service';
import { AlertInterface } from '../../../models/AlertInterface';


@Component({
  selector: 'app-listatarefa',
  templateUrl: './listatarefa.component.html',
  styleUrls: ['./listatarefa.component.css']
})

export class ListatarefaComponent implements OnInit {
  alerts: AlertInterface[] = []
  id: any
  listaTarefas: any
  faEdit = faEdit
  faPlus = faPlus
  faTrashAlt=faTrashAlt
  faCheckCircle=faCheckCircle
  p: number = 1;
 
  constructor(private tarefaService: TarefaService ,private alertService:AlertService) {}
  ngOnInit(): void {
    this.getTarefas();
  }

  /*Methods tarefas*/
  getTarefas():void{
  this.tarefaService.getTarefas()
   .subscribe(listaTarefas => this.listaTarefas = (listaTarefas))
  }
  deleteTarefa(id:number):void{
    this.tarefaService.deleteTarefa(id)
    .subscribe( listaTarefas =>  this.listaTarefas = this.getTarefas())
    this.alerts = [];
    this.alerts = this.alertService.alertsDeletado(id)
  }

  /*search tarefas*/
  searchTarefas(term:string):void {
  const search =   term.toLocaleLowerCase()
;    if(search === ''){
     this.getTarefas()
    }else{
      this.tarefaService.searchTarefas(search)
      .subscribe(listaTarefas => this.listaTarefas = listaTarefas,
        error => {
          console.log(error)
        })
    }
  }
  
  /*Methods Alerts*/
  close(alert: AlertInterface):void{
  this.alerts = this.alertService.closeAlert(alert)
  }
  showAlert(nome:string,id:number):void{
    this.alerts =  this.alertService.showAlert(nome,id)
  }
  

}
