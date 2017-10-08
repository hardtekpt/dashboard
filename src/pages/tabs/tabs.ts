import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { NotesPage } from '../notes/notes';

import { StatusBar } from '@ionic-native/status-bar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotesPage;
  tab3Root = SettingsPage;

  constructor(private statusBar: StatusBar) {
  	this.statusBar.overlaysWebView(true);
  	this.statusBar.backgroundColorByHexString('#303F9F');
  }
}
