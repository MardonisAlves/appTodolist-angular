import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-endtodolist';

  constructor(private authService: AuthServiceService ,
    private router: Router) { }


  login(f:NgForm){

    console.log(f.value.email)
    console.log(f.value.password)
   

    if (f.value.email && f.value.password) {
      this.authService.login(f.value.email, f.value.password)
          .subscribe(
              () => {
  
                  console.log("User is logged in");
                  this.router.navigateByUrl('home');
              }
          );
  }
  
  }
}
