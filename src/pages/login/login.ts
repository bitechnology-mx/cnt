import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../../shared/dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public usuarioImage = "assets/images/foto_login2.jpg";
  public usuario:string = "user";

  constructor(public navCtrl: NavController, public splashScreen: SplashScreen) {
    splashScreen.hide();
  }

  public goToDashboard(){
    var usuarioLogin = this.usuario;
    if (usuarioLogin=="super" || usuarioLogin=="user"){
      //$("#video-background").hide();
      //$("#divVideo").css('background-image', 'url("assets/images/others/img-29.jpg")');
      if (usuarioLogin=="super"){
        this.navCtrl.push(DashboardPage);
      } else if (usuarioLogin=="user"){
        this.navCtrl.push(DashboardPage);
      }
      return false;
    }
  }

  public changeUser(ev){
    var usuarioInput = ev.target.value;
    usuarioInput = usuarioInput.toLowerCase();
    console.log(usuarioInput);
    if (usuarioInput=="super"){
      this.usuarioImage = "assets/images/foto_login.jpg";
    } else if (usuarioInput=="user"){
      this.usuarioImage = "assets/images/foto_login2.jpg";
    } else {
      this.usuarioImage = "assets/images/foto_login_b.jpg";
    }
  }

}
