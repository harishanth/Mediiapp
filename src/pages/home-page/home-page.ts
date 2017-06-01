import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StartpagePage } from '../startpage/startpage';
import { LoginpagePage } from '../loginpage/loginpage';
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class HomePagePage {
	StartpagePage=StartpagePage;
	LoginpagePage=LoginpagePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
	
  startpagenav(){
   this.navCtrl.push(StartpagePage);
  }
  
  loginpagenav(){
   this.navCtrl.push(LoginpagePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePagePage');
  }

}
