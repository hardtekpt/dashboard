import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { NotesPage } from '../pages/notes/notes';
import { EditProductPage } from '../pages/edit-product/edit-product';
import { ListaComprasPage } from '../pages/lista-compras/lista-compras';
import { ComprasUrgentesPage } from '../pages/compras-urgentes/compras-urgentes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MqttProvider } from '../providers/mqtt/mqtt';
import { WeatherProvider } from '../providers/weather/weather';
import { TasksProvider } from '../providers/tasks/tasks';

import { SQLite } from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { ProductProvider } from '../providers/product/product';
import { CategoryProvider } from '../providers/category/category';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SettingsPage,
    NotesPage,
    EditProductPage,
    ListaComprasPage,
    ComprasUrgentesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SettingsPage,
    NotesPage,
    EditProductPage,
    ListaComprasPage,
    ComprasUrgentesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MqttProvider,
    WeatherProvider,
    TasksProvider,
    {provide: LOCALE_ID, useValue: 'pt-PT'},
    SQLite,
    DatabaseProvider,
    ProductProvider,
    CategoryProvider,
    DatabaseProvider,
    ProductProvider,
    CategoryProvider
  ]
})
export class AppModule {}
