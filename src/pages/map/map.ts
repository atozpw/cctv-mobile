import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;
  options : InAppBrowserOptions = {
    location : 'no', //Or 'yes' 
    hidden : 'no', //Or 'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes', //Android only, shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
  };

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser
  ) {
    this.platform.ready().then(()=>{
      this.loadMap();
    });
  }

  loadMap() {
    let options: GoogleMapOptions = {
      controls: {
        compass: true
        // myLocation: true,
        // myLocationButton: true,
        // mapToolbar: true
      },
      camera: {
        target: {
          lat: -6.2708998,
          lng: 107.1596217
        },
        zoom: 13,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', options);
    this.map.one(GoogleMapsEvent.MAP_READY).then(this.onMapReady.bind(this));
  }

  onMapReady() {
    console.log('map is ready!');

    // CCTV Pasir Gombong 1
    let dev01: Marker = this.map.addMarkerSync({
      title: 'CCTV Pasir Gombong 1',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.289396,
        lng: 107.152571
      }
    });
    dev01.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8013/video3.mjpg', '_self', this.options);
    });

    // CCTV Pasir Gombong 2
    let dev02: Marker = this.map.addMarkerSync({
      title: 'CCTV Pasir Gombong 2',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.289494,
        lng: 107.152562
      }
    });
    dev02.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8014/video3.mjpg', '_self', this.options);
    });

    // CCTV Pasir Gombong 3
    let dev03: Marker = this.map.addMarkerSync({
      title: 'CCTV Pasir Gombong 3',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.289438,
        lng: 107.152534
      }
    });
    dev03.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8015/video3.mjpg', '_self', this.options);
    });

    // CCTV Jurong 1
    let dev04: Marker = this.map.addMarkerSync({
      title: 'CCTV Jurong 1',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.279632,
        lng: 107.166575
      }
    });
    dev04.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8016/video3.mjpg', '_self', this.options);
    });

    // CCTV Jurong 2
    let dev05: Marker = this.map.addMarkerSync({
      title: 'CCTV Jurong 2',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.279632,
        lng: 107.166575
      }
    });
    dev05.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8017/video3.mjpg', '_self', this.options);
    });

    // CCTV Jurong 3
    let dev06: Marker = this.map.addMarkerSync({
      title: 'CCTV Jurong 3',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.279858,
        lng: 107.166711
      }
    });
    dev06.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8018/video3.mjpg', '_self', this.options);
    });

    // CCTV Jurong 4
    let dev07: Marker = this.map.addMarkerSync({
      title: 'CCTV Jurong 3',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.279858,
        lng: 107.166711
      }
    });
    dev07.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8019/video3.mjpg', '_self', this.options);
    });

    // CCTV SGC
    let dev08: Marker = this.map.addMarkerSync({
      title: 'CCTV SGC',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.258872,
        lng: 107.147226
      }
    });
    dev08.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8008/video3.mjpg', '_self', this.options);
    });

    // CCTV Sukatani
    let dev09: Marker = this.map.addMarkerSync({
      title: 'CCTV Sukatani',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: -6.257592,
        lng: 107.156328
      }
    });
    dev09.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.iab.create('http://36.89.131.205:8009/video3.mjpg', '_self', this.options);
    });
  }

}
