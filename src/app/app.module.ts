import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { updates } from '../pages/updates/updates';
import { notification } from '../pages/notification/notification';
import { profile } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePagePage } from '../pages/home-page/home-page';
import { StartpagePage } from '../pages/startpage/startpage';
import { LoginpagePage } from '../pages/loginpage/loginpage';

@NgModule({
  declarations: [
    MyApp,
    updates,
    notification,
    profile,
    TabsPage,
	HomePagePage,
	StartpagePage,
	LoginpagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    updates,
    notification,
    profile,
    TabsPage,
	HomePagePage,
	StartpagePage,
	LoginpagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
