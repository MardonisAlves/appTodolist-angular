import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaduserComponent } from './template/caduser/caduser.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

import { HomeComponent } from './template/dashboard/home/home.component';
import { EditTarefaComponent } from './template/dashboard/listatarefa/edit-tarefa/edit-tarefa.component';
import { ListatarefaComponent } from './template/dashboard/listatarefa/listatarefa.component';
import { NewListComponent } from './template/dashboard/listatarefa/new-list/new-list.component';
import { LoginComponent } from './template/login/login.component';
import { AdminComponent } from './template/admin/admin.component';
const routes: Routes = [
  
  { path: '' , component: LoginComponent },
  { path: 'home' , component: HomeComponent , canActivate:[AuthGuardService]},
  {path: 'caduser' , component: CaduserComponent},
  {path: 'new' , component: NewListComponent ,canActivate:[AuthGuardService]},
  {path: 'edit/:id' , component: EditTarefaComponent ,canActivate:[AuthGuardService]},
  {path: 'listatarefa' , component:ListatarefaComponent , canActivate:[AuthGuardService]},

  {path: 'admin' , component:AdminComponent ,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
