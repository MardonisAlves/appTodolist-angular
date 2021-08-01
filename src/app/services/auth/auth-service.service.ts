import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment'
import 'rxjs/add/operator/do';
import { shareReplay } from 'rxjs/operators';
import  baseUrl from '../../baseURl/baseUrl'
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   
  private storage : Storage
  
  constructor(
    private http: HttpClient ,
    private router:Router,
    private location:Location) {
     this.storage = localStorage
  
  }

  login(email: string, password: string) {

    return this.http.post<any>(`${baseUrl}login`, { email, password })
    .do(authResult => this.setSession(authResult),(error) =>{
      
      if(error.status == 401){
      console.log(error)
      }
    })
    .pipe(shareReplay())
    
  }

  private setSession(authResult: any) {
    console.log(authResult.expiresIn)

    const expiresAt = moment().add(authResult.expiresIn, 'seconds');
    const id_token = this.storage.setItem('id_token', authResult.idToken);
    this.storage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));


    const id =  this.storage.setItem('id' , authResult.id);
    const getid = this.storage.getItem('id');
    console.log(getid)
    const nome = this.storage.setItem('nome',authResult.nome);
    const sobrenome = this.storage.setItem('sobrenome',authResult.sobrenome)
    const typeuser  = this.storage.setItem('typeuser' , authResult.typeuser )

    const getTypeuser = this.storage.getItem('typeuser')
    console.log(getTypeuser)
  }

  logout() {
    this.storage.removeItem("id_token");
    this.storage.removeItem("expires_at");
    this.storage.removeItem("id")
    this.router.navigateByUrl("")
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {

    const expiration = localStorage.getItem("expires_at") || "[]";
    const expiresAt = JSON.parse(expiration);
    console.log(expiresAt)
    return moment(expiresAt).format();
  }

  goBack(): void {
    this.location.back();
  }
}
