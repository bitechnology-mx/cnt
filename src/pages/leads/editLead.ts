import { AfterViewInit, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CardLeadPage } from '../../pages/leads/cardLead';

import { Asignacion } from "../../providers/interfaces/asignacion.interface";

@Component({
  selector: 'page-editLead',
  templateUrl: 'editLead.html'
})
export class EditLeadPage {

  asignacion:Asignacion;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.asignacion = this.navParams.get("asignacion");
  }

  public cardLead(){
    this.navCtrl.pop();
  }
}
