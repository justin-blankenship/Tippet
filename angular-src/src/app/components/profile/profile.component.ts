import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	user: Object;
  fly:Object;

  constructor(
  	public authService: AuthService, 
  	private router: Router,
    private http: HttpClient
  	) { }

  ngOnInit() {
    this.http.get('/flies').subscribe(data => {
      this.fly = data;
    });
  	this.authService.getProfile().subscribe(profile => {
  		this.user = profile.user;
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }

}
