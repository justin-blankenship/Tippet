import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})

export class ShopsComponent implements OnInit {
  user: Object;
  lat: number;
  lng: number;

  constructor(
    private authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
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

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-shops',
//   templateUrl: './shops.component.html',
//   styleUrls: ['./shops.component.css']
// })
// export class ShopsComponent implements OnInit {
// 	lat: number;
// 	lng: number;

//   constructor() { }

//   ngOnInit() {
//   	this.getUserLocation()
//   }

//   private getUserLocation() {
//   	if (navigator.geolocation) {
//   		navigator.geolocation.getCurrentPosition(position => {
//   			this.lat = position.coords.latitude;
//   			this.lng = position.coords.longitude;
//   		});
//   	}
//   }
  
// }

///////////////////////////////////////////////////////////////////

// selectedLocation(event) {
  //   this.lat = event.coords.lat;
  //   this.lng = event.coords.lng;
  //   this.pinPlaced = 1;
  // }