import { Component, OnInit } from '@angular/core';
import { faTachometerAlt ,faTable , faAd, faUserCircle} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faTachometerAlt=faTachometerAlt
  faTable=faTable
  faAd=faAd
  faUserCircle=faUserCircle
  nome:any = ''
  constructor() { 
    this.nome = localStorage.getItem('nome') || ''
  }

  ngOnInit(): void {
  }

}
