import { Component, OnInit } from '@angular/core';
import {faListAlt} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-cardlista',
  templateUrl: './cardlista.component.html',
  styleUrls: ['./cardlista.component.css']
})
export class CardlistaComponent implements OnInit {
  faListAlt=faListAlt
  constructor() { }

  ngOnInit(): void {
  }

}
