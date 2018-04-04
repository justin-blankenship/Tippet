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

  pins: pin[] = [
    {
      name:'Curtis Wright Outfitters & Fly Fishing Guides',
      lat: 35.566113,
      lng: -82.540867,
      street:'5 All Souls Crescent',
      czs:'Asheville, NC 28803'
    },
    {
      name:'Hunter Banks Fly Fishing - Asheville',
      lat: 35.597075,
      lng: -82.559710,
      street:'29 Montford Ave',
      czs:'Asheville, NC 28801'
    },
    {
      name:'Curtis Wright Outfitters & Fly Fishing Guides',
      lat: 35.697227,
      lng: -82.560670,
      street:'24 N Main St',
      czs:'Weaverville, NC 28787'
    },
    {
      name:'One Fly Outfitters',
      lat: 35.616641,
      lng: -82.320943,
      street:'112 Cherry St',
      czs:'Black Mountain, NC 28711'
    },
    {
      name:'Orvis',
      lat: 35.485360,
      lng: -82.554410,
      street:'29 Schenck Pkwy #150',
      czs:'Asheville, NC 28803'
    },
    {
      name:'Brown Trout Fly Fishing LLC',
      lat: 35.485216,
      lng: -82.554342,
      street:'28 Schenck Pkwy #150',
      czs:'Asheville, NC 28803'
    },
    {
      name:'Hunter Banks Fly Fishing - Waynesville',
      lat: 35.490304,
      lng: -82.987560,
      street:'3889, 44 N Main St',
      czs:'Waynesville, NC 28786'
    },
    {
      name:'Davidson River Outfitters',
      lat: 35.273898,
      lng: -82.705076,
      street:'49 Pisgah Hwy #6',
      czs:'Pisgah Forest, NC 28768'
    },
    {
      name:'Southern Drifters Outfitters',
      lat: 35.917702,
      lng: -82.299390,
      street:'101 Town Square',
      czs:'Burnsville, NC 28714'
    },
    {
      name:'Tuckaseegee Fly Shop',
      lat: 35.373695,
      lng: -82.222569,
      street:'534 W Main St',
      czs:'Sylva, NC 28779'
    },
    {
      name:'Highland Outfitters',
      lat: 36.070849,
      lng: -81.871577,
      street:'4210 Mitchell Ave #1',
      czs:'Linville, NC 28646'
    },
    {
      name:'Hookers Fly Shop',
      lat: 35.373795,
      lng: -83.222812,
      street:'546 W Main St',
      czs:'Sylva, NC 28779'
    },
    {
      name:'Tuckaseegee Fly Shop',
      lat: 35.430864,
      lng: -83.447172,
      street:'3 Depot St',
      czs:'Bryson City, NC 28713'
    },
    {
      name:'Casters Fly Shop',
      lat: 35.763500,
      lng: -81.334150,
      street:'2427 N Center St',
      czs:'Hickory, NC 28601'
    },
    {
      name:'Foscoe Fishing Company & Outfitters',
      lat: 36.158438,
      lng: -81.769415,
      street:'8857 NC-105',
      czs:'Boone, NC 28607'
    },
    {
      name:'Appalachian Angler Fly Shop',
      lat: 36.182085,
      lng: -81.747424,
      street:'174 Old Shulls Mill Rd',
      czs:'Boone, NC 28607'
    },
    {
      name:'Watauga River Fly Shop',
      lat: 36.195083,
      lng: -81.744858,
      street:'5712 NC Highway 105 South',
      czs:'Vilas, NC 28692'
    },
    {
      name:'Due South Outfitters',
      lat: 36.204993,
      lng: -81.696859,
      street:'2575 NC-105 Suite 60',
      czs:'Boone, NC 28607'
    },
    {
      name:'Madison River Fly Fishing Outfitters',
      lat: 35.487777,
      lng: -80.874737,
      street:'20910 Torrence Chapel Rd',
      czs:'Cornelius, NC 28031'
    }
  ];

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

interface pin {
  name: string;
  lat: number;
  lng: number;
  street: string;
  czs: string;
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