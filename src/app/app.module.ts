import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StreamPage } from '../pages/stream/stream';
import { ListDevicePage } from '../pages/list-device/list-device';
import { MapPage } from '../pages/map/map';
import { AtcsPage } from '../pages/atcs/atcs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StreamPage,
    ListDevicePage,
    MapPage,
    AtcsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StreamPage,
    ListDevicePage,
    MapPage,
    AtcsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
