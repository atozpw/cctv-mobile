import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ListDevicePage } from '../list-device/list-device';
import { MapPage } from '../map/map';
import { AtcsPage } from '../atcs/atcs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options : InAppBrowserOptions = {
    location : 'no', //Or 'yes' 
    hidden : 'no', //Or 'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'no', //Android only, shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
  };

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private iab: InAppBrowser
  ) {}

  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'Informasi',
      subTitle: 'Fitur masih dalam tahap pengembangan!',
      buttons: ['OK']
    });
    alert.present();
  }

  openListDevice(){
    this.navCtrl.push(ListDevicePage, {});
  }

  openMap(){
    this.navCtrl.push(MapPage, {});
  }

  openAtcs(){
    this.navCtrl.push(AtcsPage, {});
  }

  openInstagram() {
    this.iab.create('https://www.instagram.com/atcs_kab_bekasi/', '_self', this.options);
  }

  openFacebook() {
    this.iab.create('https://www.facebook.com/dishub.kabbekasi', '_self', this.options);
  }

  openTwitter() {
    this.iab.create('https://twitter.com/atcskabbekasi', '_self', this.options);
  }

}
