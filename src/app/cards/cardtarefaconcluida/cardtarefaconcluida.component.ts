import { Component, OnInit } from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import { TarefaService } from 'src/app/services/Tarefa.service';
@Component({
  selector: 'app-cardtarefaconcluida',
  templateUrl: './cardtarefaconcluida.component.html',
  styleUrls: ['./cardtarefaconcluida.component.css']
})
export class CardtarefaconcluidaComponent implements OnInit {
  faCheck=faCheck
  count:any = 0

  constructor(private tarefaService:TarefaService) { }

  ngOnInit(): void {
    this.tarefasConcluidas()
  }

  tarefasConcluidas(){
    this.tarefaService.tarefasConcluidas()
    .subscribe(count => this.count = count)
  }
}
