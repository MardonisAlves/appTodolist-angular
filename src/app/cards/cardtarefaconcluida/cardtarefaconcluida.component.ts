import { Component, OnInit } from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-cardtarefaconcluida',
  templateUrl: './cardtarefaconcluida.component.html',
  styleUrls: ['./cardtarefaconcluida.component.css']
})
export class CardtarefaconcluidaComponent implements OnInit {
  faCheck=faCheck
  constructor() { }

  ngOnInit(): void {
  }

}
