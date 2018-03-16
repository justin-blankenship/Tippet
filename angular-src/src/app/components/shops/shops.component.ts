import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
	lat: number = 35.61604;
	lng: number = -82.565475;
	pinPlaced = 0;

	selectedLocation(event) {
		this.lat = event.coords.lat;
		this.lng = event.coords.lng;
		this.pinPlaced = 1;
	}

  constructor() { }

  ngOnInit() {
  }

}