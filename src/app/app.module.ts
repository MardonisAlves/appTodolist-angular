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
import { MenuhomeComponent } from './menuhome/menuhome.component';
import { ListatarefaComponent } from './listatarefa/listatarefa.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardsComponent } from './cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AuthGuardService } from './guards/auth-guard.service';
import { EditTarefaComponent } from './listatarefa/edit-tarefa/edit-tarefa.component';
import { NewListComponent } from './listatarefa/new-list/new-list.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    CaduserComponent,
    MenuhomeComponent,
    ListatarefaComponent,
    FooterComponent,
    SidebarComponent,
    CardsComponent,
    EditTarefaComponent,
    NewListComponent,
  
   
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
