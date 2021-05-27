import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaduserComponent } from './caduser/caduser.component';
import { AuthGuardService } from './guards/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { ListatarefaComponent } from './listatarefa/listatarefa.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  { path: '' , component: LoginComponent },
  { path: 'home' , component: HomeComponent , canActivate:[AuthGuardService]},
  {path: 'caduser' , component: CaduserComponent},
  {path: 'listatarefa' , component:ListatarefaComponent , canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
