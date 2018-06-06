import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-atcs',
  templateUrl: 'atcs.html',
})
export class AtcsPage {

  map: GoogleMap;

  constructor(
    private platform: Platform,
    public navCtrl: NavController, 
    public navParams: NavParams
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
  }

}
