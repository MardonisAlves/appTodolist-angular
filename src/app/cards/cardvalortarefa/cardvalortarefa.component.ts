import { Component, OnInit } from '@angular/core';
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-cardvalortarefa',
  templateUrl: './cardvalortarefa.component.html',
  styleUrls: ['./cardvalortarefa.component.css']
})
export class CardvalortarefaComponent implements OnInit {
  faMoneyBillWave=faMoneyBillWave
  constructor() { }

  ngOnInit(): void {
  }

}
