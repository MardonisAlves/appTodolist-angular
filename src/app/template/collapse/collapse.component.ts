import { Component, OnInit } from '@angular/core';
import { faTimesCircle ,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {
  
  faTimesCircle=faTimesCircle
  faSignOutAlt=faSignOutAlt
  nome:string = ''
  constructor(private authservice: AuthServiceService) {
    this.nome = localStorage.getItem('nome') || ""
   }

  ngOnInit(): void {
  }

  logout(){
    this.authservice.logout();
  }

}
