import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaduserComponent } from './caduser/caduser.component';
import { AuthGuardService } from './guards/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { EditTarefaComponent } from './listatarefa/edit-tarefa/edit-tarefa.component';
import { ListatarefaComponent } from './listatarefa/listatarefa.component';
import { NewListComponent } from './listatarefa/new-list/new-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  { path: '' , component: LoginComponent },
  { path: 'home' , component: HomeComponent , canActivate:[AuthGuardService]},
  {path: 'caduser' , component: CaduserComponent},
  {path: 'new' , component: NewListComponent},
  {path: 'edit/:id' , component: EditTarefaComponent},
  {path: 'listatarefa' , component:ListatarefaComponent , canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
