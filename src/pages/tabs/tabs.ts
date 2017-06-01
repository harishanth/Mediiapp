import { Component } from '@angular/core';

import { notification } from '../notification/notification';
import { updates } from '../updates/updates';
import { profile } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = notification;
  tab2Root: any = updates;
  tab3Root: any = profile;

  constructor() {

  }
}
