import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserLock , faKey , faUserCircle , faMinusSquare} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-caduser',
  templateUrl: './caduser.component.html',
  styleUrls: ['./caduser.component.css']
})
export class CaduserComponent implements OnInit {
  faUserLock = faUserLock
  faKey = faKey
  faUserCircle=faUserCircle
  faMinusSquare= faMinusSquare

  error:string
  
  constructor() {
    this.error = ''
  }

  ngOnInit(): void {
  }

  caduser(f:NgForm){

  }

}
