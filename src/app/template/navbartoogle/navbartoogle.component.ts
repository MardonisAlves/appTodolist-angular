import { Component, OnInit } from '@angular/core';
import {  faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbartoogle',
  templateUrl: './navbartoogle.component.html',
  styleUrls: ['./navbartoogle.component.css']
})
export class NavbartoogleComponent implements OnInit {
  faSignOutAlt=faSignOutAlt
  constructor() { }

  ngOnInit(): void {
  }

}
