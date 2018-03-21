import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
	lat: number;
	lng: number;

	// selectedLocation(event) {
	// 	this.lat = event.coords.lat;
	// 	this.lng = event.coords.lng;
	// 	this.pinPlaced = 1;
	// }

  constructor() { }

  ngOnInit() {
  	this.getUserLocation()
  }

  private getUserLocation() {
  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(position => {
  			this.lat = position.coords.latitude;
  			this.lng = position.coords.longitude;
  		});
  	}
  }
}