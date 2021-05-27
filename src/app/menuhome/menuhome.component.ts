import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faUserPlus ,faList , faHome, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menuhome',
  templateUrl: './menuhome.component.html',
  styleUrls: ['./menuhome.component.css']
})
export class MenuhomeComponent implements OnInit {
  faUserPlus = faUserPlus
  faList =faList
  faHome=faHome
  faSignOutAlt=faSignOutAlt

   nome:string = ''
   collapsed = true;
  constructor(private router:Router) { 
    this.nome =  localStorage.getItem('nome') || ''
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("id")
    localStorage.removeItem('nome')
  
    this.router.navigateByUrl("")
  }
}
