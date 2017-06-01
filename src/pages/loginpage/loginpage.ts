import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Loginpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html'
})
export class LoginpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

   mypagenav(){
   this.navCtrl.push(TabsPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginpagePage');
  }

}
