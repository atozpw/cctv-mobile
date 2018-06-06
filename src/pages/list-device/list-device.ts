import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-list-device',
  templateUrl: 'list-device.html',
})
export class ListDevicePage {

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
    public navParams: NavParams,
    private iab: InAppBrowser
  ) {
  }

  // CCTV Pasir Gombong 1
  openDev01() {
    this.iab.create('http://36.89.131.205:8013/video3.mjpg', '_self', this.options);
  }

  // CCTV Pasir Gombong 2
  openDev02() {
    this.iab.create('http://36.89.131.205:8014/video3.mjpg', '_self', this.options);
  }

  // CCTV Pasir Gombong 3
  openDev03() {
    this.iab.create('http://36.89.131.205:8015/video3.mjpg', '_self', this.options);
  }

  // CCTV SGC
  openDev04() {
    this.iab.create('http://36.89.131.205:8008/video3.mjpg', '_self', this.options);
  }

  // CCTV Jurong 1
  openDev05() {
    this.iab.create('http://36.89.131.205:8016/video3.mjpg', '_self', this.options);
  }

  // CCTV Jurong 2
  openDev06() {
    this.iab.create('http://36.89.131.205:8017/video3.mjpg', '_self', this.options);
  }

  // CCTV Jurong 3
  openDev07() {
    this.iab.create('http://36.89.131.205:8018/video3.mjpg', '_self', this.options);
  }

  // CCTV Jurong 4
  openDev08() {
    this.iab.create('http://36.89.131.205:8019/video3.mjpg', '_self', this.options);
  }

  // CCTV Sukatani
  openDev09() {
    this.iab.create('http://36.89.131.205:8009/video3.mjpg', '_self', this.options);
  }

}
