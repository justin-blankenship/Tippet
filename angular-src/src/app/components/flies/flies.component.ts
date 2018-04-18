// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-flies',
//   templateUrl: './flies.component.html',
//   styleUrls: ['./flies.component.css']
// })
// export class FliesComponent implements OnInit {
// 	flies: any;

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//   	this.http.get('/flies').subscribe(data => {
//   		this.flies = data;
//   	});
//   }
// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flies',
  templateUrl: './flies.component.html',
  styleUrls: ['./flies.component.css']
})

export class FliesComponent implements OnInit {
  user: Object;

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
  }

}