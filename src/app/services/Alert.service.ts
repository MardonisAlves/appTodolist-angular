import { Injectable } from '@angular/core';
import { AlertInterface } from '../models/AlertInterface'
import { faTrashAlt,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  faTrashAlt = faTrashAlt
  faCheckCircle=faCheckCircle
  alerts: AlertInterface[] = []

  constructor() { }
/*Methods alerts*/
  showAlert(nome: string, id: number) {
    const ALERTS: AlertInterface[] = [{
      type: 'warning',
      message: 'Deseja deleletar ' + nome,
      id: id,
      icon: this.faTrashAlt
    }];

    return ALERTS
  }
  alertLogin(message:string){
    const ALERTS: AlertInterface[] = [{
      type: 'danger',
      message: message,
      id: 0,
      icon: this.faTrashAlt
    }];
    return ALERTS
  }

  closeAlert(alert: AlertInterface) {
    return this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  alertsDeletado(id:number){
    const ALERTS: AlertInterface[] = [{
      type: 'primary',
      message: 'Tarefa deletada com sucesso',
      id:id,
      icon:this.faCheckCircle
    }];

    return ALERTS

  }
}




