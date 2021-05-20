import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaduserComponent } from './caduser/caduser.component';

import { HomeComponent } from './home/home.component';
import { ListatarefaComponent } from './listatarefa/listatarefa.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  { path: '' , component: LoginComponent },
  { path: 'home' , component: HomeComponent },
  {path: 'caduser' , component: CaduserComponent},
  {path: 'listatarefa' , component:ListatarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
