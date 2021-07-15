import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { faUserLock , faKey ,faUserPlus } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string
  faUserLock = faUserLock
  faKey = faKey
  faUserPlus=faUserPlus
  localstorage = window.localStorage
  constructor(private authService: AuthServiceService ,
              private router: Router) 
              { this.error = ''}


  ngOnInit(): void {
  }

  login(f:NgForm){
    /*verificar se exite token com starage 
      se não houver retornar menssagem de error
    */
    if (f.value.email && f.value.password) {
      this.authService.login(f.value.email, f.value.password)
          .subscribe(
              (res) => {
                 this.router.navigateByUrl('home');
              },
              (error) => {
                /* pegar o error dinamico senha e email*/
                if(error.status == 401){
                  const error = this.error= "E-mail ou senha invalida"
                   console.log(error)
                   }
              }
          );
  }

  }

}
