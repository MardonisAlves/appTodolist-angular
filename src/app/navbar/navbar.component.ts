import { Component, OnInit } from '@angular/core';
import {faUserPlus ,faList , faHome} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUserPlus = faUserPlus
  faList =faList
  faHome=faHome
  constructor() { }

  ngOnInit(): void {
  }

}
