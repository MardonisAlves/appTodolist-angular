import { Component, OnInit } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cardpendente',
  templateUrl: './cardpendente.component.html',
  styleUrls: ['./cardpendente.component.css']
})
export class CardpendenteComponent implements OnInit {
  faTasks=faTasks
  constructor() { }

  ngOnInit(): void {
  }

}
