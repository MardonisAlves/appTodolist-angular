import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import baseUrl from './../baseURl/baseUrl'


@Injectable()
export class Userservice {
    
    constructor(private http:HttpClient){
        
    }
    /*novo user*/
    Caduser(user:any){

        return this.http.post<User>(`${baseUrl}new`, user)
        .forEach((res) => {
            console.log(res) 
           
        }).catch(err => {
            console.log(err.error.list)
        })
        
    }
}
