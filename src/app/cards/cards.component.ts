import { Component, OnInit } from '@angular/core';
import {faListAlt ,faEye} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  faListAlt=faListAlt
  faEye=faEye
  constructor() { }

  ngOnInit(): void {
  }

}
