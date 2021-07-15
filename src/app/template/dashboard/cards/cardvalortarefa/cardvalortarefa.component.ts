import { Component, OnInit } from '@angular/core';
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import { TarefaService } from 'src/app/services/Tarefa.service';
@Component({
  selector: 'app-cardvalortarefa',
  templateUrl: './cardvalortarefa.component.html',
  styleUrls: ['./cardvalortarefa.component.css']
})
export class CardvalortarefaComponent implements OnInit {
  faMoneyBillWave=faMoneyBillWave
  count:any = 0
  constructor(private tarefaService:TarefaService) { }

  ngOnInit(): void {
    this.getValorTotal();
  }

  getValorTotal():void{
    this.tarefaService.getValorTotal()
    .subscribe(count => this.count = count)
  }

}
