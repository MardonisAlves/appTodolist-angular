import { Component, OnInit } from '@angular/core';
import {faListAlt ,faEye , faMoneyBill , faListUl , faCheck} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  faListAlt=faListAlt
  faEye=faEye
  faMoneyBill=faMoneyBill
  faListUl=faListUl
  faCheck=faCheck
  constructor() { }

  ngOnInit(): void {
  }

}
