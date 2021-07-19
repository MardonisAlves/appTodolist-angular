import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import baseUrl from './../baseURl/baseUrl'


@Injectable()
export class Userservice {
    
    constructor(private http:HttpClient){
        
    }
    /*novo user*/
    Caduser(user:any): Observable<User>{
      return  this.http.post<User>(`${baseUrl}new`, user)
    }
}
