import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import baseUrl from './../baseURl/baseUrl'

@Injectable()
export class Userservice {
    private id = localStorage.getItem('id')
    constructor(private http:HttpClient){
        
    }

    Caduser(user:any){
        return this.http.post<User>(`${baseUrl}new`, user)
        .subscribe(res => {
            console.log(res)
        },err => {
            console.log(err)
        })
    }
}