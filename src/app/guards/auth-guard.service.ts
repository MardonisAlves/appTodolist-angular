import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service'
import { Observable } from 'rxjs'
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router, 
    private authservice: AuthServiceService,
    private location:Location) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      if(!this.authservice.isLoggedIn()){
       this.router.navigateByUrl('')
    
      }
      return true
    }


}

