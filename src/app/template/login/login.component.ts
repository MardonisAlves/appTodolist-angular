import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { faUserLock , faKey ,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { AlertService } from 'src/app/services/Alert.service';
import { AlertInterface } from 'src/app/models/AlertInterface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  alert: AlertInterface[] = []
  faUserLock = faUserLock
  faKey = faKey
  faUserPlus=faUserPlus
  localstorage = window.localStorage
  constructor(
    private authService: AuthServiceService,
     private alertService:AlertService,
              private router: Router) 
              {}


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
                if(localStorage.getItem('typeuser') === 'admin'){
                  this.router.navigateByUrl("admin")
                }else{
                  this.router.navigateByUrl('home');
                }
                 
              },
              (error) => {
                if(error.error.email){
                  this.alert = this.alertService.alertLogin(error.error.email)
                  console.log(this.alert)
                }else{
                  this.alert = []
                  this.alert = this.alertService.alertLogin(error.error.password)
                  console.log(this.alert)
                }
              }
          );
  }

  }

  close(alert:AlertInterface){
   this.alert = this.alertService.closeAlert(alert)
  }

}
