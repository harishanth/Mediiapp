import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Startpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-startpage',
  templateUrl: 'startpage.html'
})
export class StartpagePage {
	TabsPage=TabsPage;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
	
	 mypagenav(){
   this.navCtrl.push(TabsPage);
  }
  
	
  ionViewDidLoad() {
    console.log('ionViewDidLoad StartpagePage');
  }

}
