import { Component, OnInit } from '@angular/core';
import {faListAlt , faHome , faBalanceScale} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-listatarefa',
  templateUrl: './listatarefa.component.html',
  styleUrls: ['./listatarefa.component.css']
})
export class ListatarefaComponent implements OnInit {
  faHome=faHome
  constructor() { }

  ngOnInit(): void {
  }

}
