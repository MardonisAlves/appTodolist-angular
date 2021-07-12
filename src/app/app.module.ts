import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './AuthInterceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CaduserComponent } from './caduser/caduser.component'
import { Userservice } from './services/User.service';
import { ListatarefaComponent } from './listatarefa/listatarefa.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardsComponent } from './cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AuthGuardService } from './guards/auth-guard.service';
import { EditTarefaComponent } from './listatarefa/edit-tarefa/edit-tarefa.component';
import { NewListComponent } from './listatarefa/new-list/new-list.component';
import {SidebarDirective} from './sidebar.directive';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { NavbartoogleComponent } from './template/navbartoogle/navbartoogle.component';
import { CollapseComponent } from './template/collapse/collapse.component';
import { CardpendenteComponent } from './cards/cardpendente/cardpendente.component';
import { CardlistaComponent } from './cards/cardlista/cardlista.component';
import { CardvalortarefaComponent } from './cards/cardvalortarefa/cardvalortarefa.component';
import { CardtarefaconcluidaComponent } from './cards/cardtarefaconcluida/cardtarefaconcluida.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    CaduserComponent,
    ListatarefaComponent,
    FooterComponent,
    CardsComponent,
    EditTarefaComponent,
    NewListComponent,
    SidebarDirective,
    SidebarComponent,
    NavbartoogleComponent,
    CollapseComponent,
    CardpendenteComponent,
    CardlistaComponent,
    CardvalortarefaComponent,
    CardtarefaconcluidaComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FlexLayoutModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuardService,
    HttpClient,
    Userservice,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
