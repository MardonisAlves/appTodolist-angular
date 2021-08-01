import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './template/login/login.component';
import { HomeComponent } from './template/dashboard/home/home.component';
import { AuthInterceptor } from './AuthInterceptor';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CaduserComponent } from './template/caduser/caduser.component'
import { Userservice } from './services/User.service';
import { ListatarefaComponent } from './template/dashboard/listatarefa/listatarefa.component';
import { FooterComponent } from './template/footer/footer.component';
import { CardsComponent } from './template/dashboard/cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AuthGuardService } from './services/guards/auth-guard.service';
import { EditTarefaComponent } from './template/dashboard/listatarefa/edit-tarefa/edit-tarefa.component';
import { NewListComponent } from './template/dashboard/listatarefa/new-list/new-list.component';
import {SidebarDirective} from './sidebar.directive';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { NavbartoogleComponent } from './template/navbartoogle/navbartoogle.component';
import { CollapseComponent } from './template/collapse/collapse.component';
import { CardpendenteComponent } from './template/dashboard/cards/cardpendente/cardpendente.component';
import { CardlistaComponent } from './template/dashboard/cards/cardlista/cardlista.component';
import { CardvalortarefaComponent } from './template/dashboard/cards/cardvalortarefa/cardvalortarefa.component';
import { CardtarefaconcluidaComponent } from './template/dashboard/cards/cardtarefaconcluida/cardtarefaconcluida.component';
import { NgxEchartsModule } from 'ngx-echarts';





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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    NgxPaginationModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
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
