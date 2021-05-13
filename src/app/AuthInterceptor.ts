import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, filter, tap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private router:Router){
       
    }

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
                
        const idToken = localStorage.getItem("id_token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req).pipe(tap(event => {
                
            },error => {
                console.log(error)
                this.router.navigateByUrl("")
            }));
        }
    }
}