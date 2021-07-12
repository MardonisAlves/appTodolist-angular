import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faPlus, faTrashAlt , faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { TarefaService } from '../services/Tarefa.service';

interface Alert {
  type: string;
  message: string;
  id:number;
  icon:IconProp;
}

@Component({
  selector: 'app-listatarefa',
  templateUrl: './listatarefa.component.html',
  styleUrls: ['./listatarefa.component.css']
})

export class ListatarefaComponent implements OnInit {
  alerts: Alert[]=[];
  id: any
  listaTarefas: any
  faEdit = faEdit
  faPlus = faPlus
  faTrashAlt=faTrashAlt
  faCheckCircle=faCheckCircle
  p: number = 1;
 
  constructor(private tarefaService: TarefaService) {}
  ngOnInit(): void {
    this.getTarefas();
    console.log('ngOnit')
  }
  getTarefas() {
   return  this.tarefaService.getTarefas().subscribe(listaTarefas => this.listaTarefas = (listaTarefas))
  }
  


  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  showAlert(nome:string,id:number){
    console.log(nome);
    const ALERTS: Alert[] = [{
      type: 'warning',
      message: 'Deseja deleletar ' + nome,
      id:id,
      icon:this.faTrashAlt
    }];

    this.alerts = ALERTS
  }

  deleteTarefa(id:number):void{
    /*Agora é so fazer o metodo deleteTarefa no tarefaService*/
    /* apagar o array alert*/
    this.alerts = [];
    /*chamar o metodo gettarefas()*/
   
    /* chamar o metodo deletado com sucesso*/
    const ALERTS: Alert[] = [{
      type: 'primary',
      message: 'Tarefa deletada com sucesso',
      id:id,
      icon:this.faCheckCircle
    }];
    this.alerts = ALERTS;

    this.ngOnInit()
    console.log(id)
  
  }



}
