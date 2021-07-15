import { Component, OnInit } from '@angular/core';
import { faTasks,faEye } from '@fortawesome/free-solid-svg-icons';
import { TarefaService } from 'src/app/services/Tarefa.service';
@Component({
  selector: 'app-cardpendente',
  templateUrl: './cardpendente.component.html',
  styleUrls: ['./cardpendente.component.css']
})
export class CardpendenteComponent implements OnInit {
  faTasks=faTasks
  faEye=faEye
  count:any = 0
  constructor(private tarefaservice:TarefaService) { }

  ngOnInit(): void {
    this.countTarefas()
  }

  countTarefas(){
    this.tarefaservice.countTarefasPendentes()
    .subscribe(count => this.count = count)
     
  }

}
