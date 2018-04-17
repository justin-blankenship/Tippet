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
      czs:'Asheville, NC 28803',
      phone: '(828) 274-3471'
    },
    {
      name:'Hunter Banks Fly Fishing - Asheville',
      lat: 35.597075,
      lng: -82.559710,
      street:'29 Montford Ave',
      czs:'Asheville, NC 28801',
      phone: '(828) 252-3005'
    },
    {
      name:'Curtis Wright Outfitters & Fly Fishing Guides',
      lat: 35.697227,
      lng: -82.560670,
      street:'24 N Main St',
      czs:'Weaverville, NC 28787',
      phone: '(828) 645-8700'
    },
    {
      name:'One Fly Outfitters',
      lat: 35.616641,
      lng: -82.320943,
      street:'112 Cherry St',
      czs:'Black Mountain, NC 28711',
      phone: '(828) 669-6939'
    },
    {
      name:'Orvis',
      lat: 35.485360,
      lng: -82.554410,
      street:'29 Schenck Pkwy #150',
      czs:'Asheville, NC 28803',
      phone: '(828) 687-0301'
    },
    {
      name:'Brown Trout Fly Fishing LLC',
      lat: 35.485216,
      lng: -82.554342,
      street:'28 Schenck Pkwy #150',
      czs:'Asheville, NC 28803',
      phone: '(803) 431-9437'
    },
    {
      name:'Hunter Banks Fly Fishing - Waynesville',
      lat: 35.490304,
      lng: -82.987560,
      street:'3889, 44 N Main St',
      czs:'Waynesville, NC 28786',
      phone: '(828) 251-9721'
    },
    {
      name:'Davidson River Outfitters',
      lat: 35.273898,
      lng: -82.705076,
      street:'49 Pisgah Hwy #6',
      czs:'Pisgah Forest, NC 28768',
      phone: '(828) 877-4181'
    },
    {
      name:'Southern Drifters Outfitters',
      lat: 35.917702,
      lng: -82.299390,
      street:'101 Town Square',
      czs:'Burnsville, NC 28714',
      phone: '(828) 678-1511'
    },
    {
      name:'Tuckaseegee Fly Shop',
      lat: 35.373695,
      lng: -82.222569,
      street:'534 W Main St',
      czs:'Sylva, NC 28779',
      phone: '(828) 488-3333'
    },
    {
      name:'Highland Outfitters',
      lat: 36.070849,
      lng: -81.871577,
      street:'4210 Mitchell Ave #1',
      czs:'Linville, NC 28646',
      phone: '(828) 733-2181'
    },
    {
      name:'Hookers Fly Shop',
      lat: 35.373795,
      lng: -83.222812,
      street:'546 W Main St',
      czs:'Sylva, NC 28779',
      phone: '(828) 587-4665'
    },
    {
      name:'Tuckaseegee Fly Shop',
      lat: 35.430864,
      lng: -83.447172,
      street:'3 Depot St',
      czs:'Bryson City, NC 28713',
      phone: '(828) 488-3333'
    },
    {
      name:'Casters Fly Shop',
      lat: 35.763500,
      lng: -81.334150,
      street:'2427 N Center St',
      czs:'Hickory, NC 28601',
      phone: '(828) 304-2400'
    },
    {
      name:'Foscoe Fishing Company & Outfitters',
      lat: 36.158438,
      lng: -81.769415,
      street:'8857 NC-105',
      czs:'Boone, NC 28607',
      phone: '(828) 963-6556'
    },
    {
      name:'Appalachian Angler Fly Shop',
      lat: 36.182085,
      lng: -81.747424,
      street:'174 Old Shulls Mill Rd',
      czs:'Boone, NC 28607',
      phone: '(828) 963-5050'
    },
    {
      name:'Watauga River Fly Shop',
      lat: 36.195083,
      lng: -81.744858,
      street:'5712 NC Highway 105 South',
      czs:'Vilas, NC 28692',
      phone: '(828) 963-5463'
    },
    {
      name:'Due South Outfitters',
      lat: 36.204993,
      lng: -81.696859,
      street:'2575 NC-105 Suite 60',
      czs:'Boone, NC 28607',
      phone: '(828) 355-9109'
    },
    {
      name:'Madison River Fly Fishing Outfitters',
      lat: 35.487777,
      lng: -80.874737,
      street:'20910 Torrence Chapel Rd',
      czs:'Cornelius, NC 28031',
      phone: '(704) 896-3676'
    },
    {
      name:'Chattooga River Fly Shop',
      lat: 34.837203,
      lng: -83.130973,
      street:'6832A Highlands Hwy',
      czs:'Mountain Rest, SC 29664',
      phone: '(864) 638-2806'
    },
    {
      name:'RiverBlade Knife & Fly Shop LLC',
      lat: 35.003341,
      lng: -81.949615,
      street:'1398 Boiling Springs Rd i',
      czs:'Spartanburg, SC 29303',
      phone: '(864) 699-9433'
    },
    {
      name:'Eastern Fly Outfitters',
      lat: 36.421073,
      lng: -82.323079,
      street:'6209 Bristol Hwy',
      czs:'Piney Flats, TN 37686',
      phone: '(423) 538-3007'
    },
    {
      name:'Fly Shop Co',
      lat: 34.869879, 
      lng: -84.323183,
      street:'11 Mountain St #4',
      czs:'Blue Ridge, GA 30513',
      phone: '(888) 795-7565'
    },
    {
      name:'South Holston River Fly Shop',
      lat: 36.531951,  
      lng: -82.114059,
      street:'608 Emmett Rd',
      czs:'Bristol, TN 37620',
      phone: '(423) 878-2822'
    },
    {
      name:'Nantahala Fly Fishing Co',
      lat: 35.280554,   
      lng: -83.762719,
      street:'4221 Tallulah Rd',
      czs:'Robbinsville, NC 28771',
      phone: '(828) 479-8850'
    },
    {
      name:'New River Fly Fishing',
      lat: 36.856407,    
      lng: -80.486174,
      street:'5738 Floyd Hwy S',
      czs:'Willis, VA 24380',
      phone: '(540) 789-7811'
    },
    {
      name:'Jeff Wilkins Fly Fishing',
      lat: 36.232039,    
      lng: -79.876750,
      street:'3703 Windspray Court',
      czs:'Summerfield, NC 27358',
      phone: '(336) 944-3628'
    },
    {
      name:'Green Drake Outfitters',
      lat: 36.094318,     
      lng: -80.276422,
      street:'123 S Stratford Rd',
      czs:'Winston-Salem, NC 27104',
      phone: '(336) 723-9070'
    },
    {
      name:'Orvis',
      lat: 35.146216,      
      lng: -80.827260,
      street:'6800 Phillips Pl Ct',
      czs:'Charlotte, NC 28210',
      phone: '(704) 571-6100'
    },
    {
      name:'Carolina Mountain Sports',
      lat: 35.784112,      
      lng: -80.889053,
      street:'123 West Broad Street',
      czs:'Statesville, NC 28677',
      phone: '(704) 871-1444'
    },
    {
      name:'Hazard Fly Fishing',
      lat: 34.077719,      
      lng: -81.192023,
      street:'107 Zanark Ct',
      czs:'Columbia, SC 29212',
      phone: '(803) 466-6528'
    },
    {
      name:'Chetola Resort Orvis Endorsed Fly Fishing',
      lat: 36.136608,       
      lng: -81.672021,
      street:'6037, 185 Chetola Lake Dr',
      czs:'Blowing Rock, NC 28605',
      phone: '(828) 295-5500'
    },
    {
      name:'Elk Creek Outfitters',
      lat: 36.202028,        
      lng: -81.679681,
      street:'1560 NC-105',
      czs:'Boone, NC 28607',
      phone: '(828) 264-6497'
    },
    {
      name:'Riverstone Fly Fishing',
      lat: 36.205584,         
      lng: -81.764734,
      street:'431 Old Hartley Rd',
      czs:'Banner Elk, NC 28604',
      phone: '(828) 719-1543'
    },
    {
      name:'Matt Reilly Fly Fishing',
      lat: 36.777153,          
      lng: -81.823888,
      street:'Emory & Henry College #1409, 30522 Garnand Dr',
      czs:'Emory, VA 24327',
      phone: '(434) 996-4067'
    },
    {
      name:'Angler\'s Lane',
      lat: 37.376578,           
      lng: -79.247335,
      street:'18013 Forest Rd E04',
      czs:'Forest, VA 24551',
      phone: '(434) 385-0200'
    },
    {
      name:'Cape Lookout Fly Shop',
      lat: 34.708195,            
      lng: -76.738049,
      street:'601 Atlantic Beach Causeway # H',
      czs:'Atlantic Beach, NC 28512',
      phone: '(252) 240-1427'
    },
    {
      name:'Orvis',
      lat: 35.864052,       
      lng: -78.576128,
      street:'3701 Sumner Blvd',
      czs:'Raleigh, NC 27616',
      phone: '(919) 792-9200'
    },
    {
      name:'Headwaters Outfitters',
      lat: 35.143549,        
      lng: -82.839201,
      street:'25 Parkway Rd',
      czs:'Rosman, NC 28772',
      phone: '(828) 877-3106'
    },
    {
      name:'Little River Outfitters',
      lat: 35.679616,         
      lng: -83.739669,
      street:'106 Town Square Dr',
      czs:'Townsend, TN 37882',
      phone: '(865) 448-9459'
    },
    {
      name:'The Smoky Mountain Angler',
      lat: 35.716273,          
      lng: -83.502273,
      street:'469 Brookside Village Way',
      czs:'Gatlinburg, TN 37738',
      phone: '(865) 436-8746'
    },
    {
      name:'3 Rivers Angler',
      lat: 35.939201,           
      lng: -83.988805,
      street:'5113 Kingston Pike # C',
      czs:'Knoxville, TN 37919',
      phone: '(865) 200-5271'
    },
    {
      name:'Orvis',
      lat: 35.827499,            
      lng: -83.577203,
      street:'136 Apple Valley Rd',
      czs:'Sevierville, TN 37862',
      phone: '(865) 774-4162'
    },
    {
      name:'Endless River Adventures',
      lat: 35.331387,             
      lng: -83.608207,
      street:'14157 W Hwy 19',
      czs:'Bryson City, NC 28713',
      phone: '(828) 488-6199'
    },
    {
      name:'Nantahala On The Fly',
      lat: 35.328660,    
      lng: -83.580254,
      street:'12121 W Hwy 19',
      czs:'Bryson City, NC 28713',
      phone: '(800) 468-7238'
    },
    {
      name:'Appalachian Outfitters Fly Shop',
      lat: 35.089606, 
      lng: -84.035005,
      street:'104C Tennessee St',
      czs:'Murphy, NC 28906',
      phone: '(828) 837-4165'
    },
    {
      name:'Blue Ridge Fly Fishing',
      lat: 34.868141,  
      lng: -84.322165,
      street:'490 E Main St',
      czs:'Blue Ridge, GA 30513',
      phone: '(423) 803-2733'
    },
    {
      name:'The Catawba Angler',
      lat: 35.649572,  
      lng: -82.146664,
      street:'750 Ebenezer Church Rd',
      czs:'Old Fort, NC 28762',
      phone: '(828) 460-2390'
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
  phone: string;
}